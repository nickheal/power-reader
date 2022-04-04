import React from 'react';
import { navigate } from 'gatsby';
import { useRecoilState } from 'recoil';
import { createUser, userState } from '../state/user';
import { Routes } from '../utils/routes';
import Button from '../components/Button';
import { Variant } from '../components/actionStyles';
import Heading, { Tag } from '../components/Heading';
import StandardPage from '../components/StandardPage';
import Form from '../components/Form';
import Input from '../components/Input';

export default function Setup() {
  const [, setUser] = useRecoilState(userState);

  function onSubmit(data: any) {
    setUser(createUser({ firstName: data.firstName }));
    navigate(Routes.Dashboard);
  }

  return (
    <StandardPage>
      <Form onSubmit={onSubmit}>
        <Heading tag={Tag.H1}>Setup</Heading>
        <Input label="First name" name="firstName" required />
        <Button variant={Variant.Tertiary}>Get started</Button>
      </Form>
    </StandardPage>
  );
}
