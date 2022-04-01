import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { userState } from '../state/user';
import { Routes } from '../utils/routes';
import Main from '../components/Main';
import Heading, { Tag } from '../components/Heading';
import Form from '../components/Form';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

export default function CreateDocument() {
  const [user, setUser] = useRecoilState(userState);

  const navigate = useNavigate();

  function onSubmit(data: any) {
    const newDocument = {
      id: uuidv4(),
      name: data.name,
      content: data.content,
      readerPosition: 0
    }
    setUser({
      ...user!,
      documents: [...user!.documents, newDocument]
    });
    navigate(Routes.Dashboard);
  }

  return (
    <Main>
      <Form onSubmit={onSubmit}>
        <Heading tag={Tag.H1}>New document</Heading>
        <Input label="Name" name="name" required />
        <TextArea label="Content" name="content" type="textarea" required />
        <Button>Create</Button>
      </Form>
    </Main>
  );
}
