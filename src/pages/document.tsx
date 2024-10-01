import React from 'react';
import { navigate } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { useUserState } from '../state/user';
import { Routes } from '../utils/routes';
import { getDocument } from '../utils/document';
import Button from '../components/Button';
import { Variant } from '../components/actionStyles';
import Form from '../components/Form';
import Heading, { Tag } from '../components/Heading';
import Input from '../components/Input';
import Link from '../components/Link';
import StandardPage from '../components/StandardPage';
import TextArea from '../components/TextArea';

export default function CreateDocument() {
  const [user, setUser] = useUserState();

  const existingDocument = getDocument(user);

  function onSubmit(data: any) {
    const newDocument = {
      id: existingDocument?.id ?? uuidv4(),
      name: data.name.trim(),
      content: data.content.trim(),
      readerPosition: 0
    }

    if (existingDocument) {
      const updateDocuments = [...user.documents];
      updateDocuments[updateDocuments.indexOf(existingDocument)] = newDocument;

      setUser({
        ...user,
        documents: updateDocuments
      });
    } else {
      setUser({
        ...user,
        documents: [...user.documents, newDocument]
      });
    }

    navigate(Routes.Dashboard);
  }

  return (
    <StandardPage>
      <Form initialState={existingDocument ? { name: existingDocument.name, content: existingDocument.content } : null} onSubmit={onSubmit}>
        <Heading tag={Tag.H1}>{ existingDocument ? 'Edit document' : 'New document' }</Heading>
        <Input label="Name" name="name" required />
        <TextArea label="Content" name="content" type="textarea" required />
        <Button variant={Variant.Tertiary}>{ existingDocument ? 'Save' : 'Create' }</Button>
        <Link to={Routes.Dashboard} variant={Variant.Tertiary}>Cancel</Link>
      </Form>
    </StandardPage>
  );
}
