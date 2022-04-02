import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { userState } from '../state/user';
import { Routes } from '../utils/routes';
import Button from '../components/Button';
import { Variant } from '../components/actionStyles';
import Form from '../components/Form';
import Heading, { Tag } from '../components/Heading';
import Input from '../components/Input';
import Link from '../components/Link';
import Main from '../components/Main';
import TextArea from '../components/TextArea';

export default function CreateDocument() {
  const [user, setUser] = useRecoilState(userState);
  const { id } = useParams();

  const existingDocument = id ? user?.documents.find(document => document.id === id) : null;

  const navigate = useNavigate();

  function onSubmit(data: any) {
    const newDocument = {
      id: existingDocument?.id || uuidv4(),
      name: data.name,
      content: data.content,
      readerPosition: 0
    }

    if (existingDocument) {
      const updateDocuments = [...user!.documents];
      updateDocuments[updateDocuments.indexOf(existingDocument)] = newDocument;

      setUser({
        ...user!,
        documents: updateDocuments
      });
    } else {
      setUser({
        ...user!,
        documents: [...user!.documents, newDocument]
      });
    }

    navigate(Routes.Dashboard);
  }

  return (
    <Main>
      <Form initialState={existingDocument ? { name: existingDocument.name, content: existingDocument.content } : null} onSubmit={onSubmit}>
        <Heading tag={Tag.H1}>{ existingDocument ? 'Edit document' : 'New document' }</Heading>
        <Input label="Name" name="name" required />
        <TextArea label="Content" name="content" type="textarea" required />
        <Button variant={Variant.Tertiary}>{ existingDocument ? 'Save' : 'Create' }</Button>
        <Link to={Routes.Dashboard} variant={Variant.Tertiary}>Cancel</Link>
      </Form>
    </Main>
  );
}