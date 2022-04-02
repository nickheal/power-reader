import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { createUser, userState } from '../state/user';
import { Routes } from '../utils/routes';
import Button from '../components/Button';
import { Variant } from '../components/actionStyles';
import Heading, { Tag } from '../components/Heading';
import Main from '../components/Main';
import Form from '../components/Form';
import Input from '../components/Input';

export default function Setup() {
  const [, setUser] = useRecoilState(userState);

  const navigate = useNavigate();

  function onSubmit(data: any) {
    setUser(createUser({ firstName: data.firstName }));
    navigate(Routes.Dashboard);
  }

  return (
    <Main>
      <Form onSubmit={onSubmit}>
        <Heading tag={Tag.H1}>Setup</Heading>
        <Input label="First name" name="firstName" required />
        <Button variant={Variant.Tertiary}>Get started</Button>
      </Form>
    </Main>
  );
}
