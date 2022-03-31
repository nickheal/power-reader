import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../utils/routes';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Setup() {
  const navigate = useNavigate();

  function onSubmit() {
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
