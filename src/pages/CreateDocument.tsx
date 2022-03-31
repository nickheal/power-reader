import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { createUser, userState } from '../state/user';
import { Routes } from '../utils/routes';
import Form from '../components/Form';
import Input from '../components/Input';
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
    <main>
      <Form onSubmit={onSubmit}>
        <p>Setup!</p>
        <Input name="name" required />
        <Input name="content" required />
        <Button>Create</Button>
      </Form>
    </main>
  );
}
