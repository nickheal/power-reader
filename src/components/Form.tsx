import React, { useState } from 'react';
import { FormContentContext, FormUpdateContext, FormReturn, FormEntry } from '../contexts/Form';

interface Props extends Omit<React.HTMLProps<HTMLFormElement>, 'onSubmit'> {
  children?: React.ReactNode,
  initialState?: { [key: string]: string } | null;
  onSubmit?: (content: FormReturn) => void;
}

export default function Form(props: Props = {}) {
  const firstState = props.initialState ? Object.keys(props.initialState).map(key => ({ id: key, value: props.initialState![key] })) : [];
  const [formContentState, setFormContentState] = useState<FormEntry[]>(firstState);

  function updateState(name: string, value: string) {
    const preexistingState = formContentState.find(({ id }) => id === name);
    if (preexistingState) {
      preexistingState.value = value;
    } else {
      formContentState.push({
        id: name,
        value
      });
    }
    setFormContentState([...formContentState]);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (props.onSubmit) {
      const formattedReturn = formContentState.reduce((acc: any, val) => {
        acc[val.id] = val.value;
        return acc;
      }, {});

      await props.onSubmit(formattedReturn);

      setFormContentState([]);
    }
  }

  const {
    initialState,
    ...formProps
  } = props;

  return (
    <FormUpdateContext.Provider value={updateState}>
      <FormContentContext.Provider value={formContentState}>
        <form {...formProps} onSubmit={onSubmit} />
      </FormContentContext.Provider>
    </FormUpdateContext.Provider>
  )
}
