import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { createUser, userState } from '../state/user';
import { Routes } from '../utils/routes';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Setup() {
  const [, setUser] = useRecoilState(userState);

  const navigate = useNavigate();

  function onSubmit(data: any) {
    setUser(createUser({ firstName: data.firstName }));
    navigate(Routes.Dashboard);
  }

  return (
    <main>
      <Form onSubmit={onSubmit}>
        <p>Setup!</p>
        <Input name="firstName" required />
        <Button>Get started</Button>
      </Form>
    </main>
  );
}
