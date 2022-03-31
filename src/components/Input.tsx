import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FormContentContext, FormUpdateContext } from '../contexts/Form';

interface Props extends React.HTMLProps<HTMLInputElement> {}

const useStyles = createUseStyles({
  input: {
    background: 0,
    border: {
      color: '#ffffff33',
      width: [0, 0, 2, 0]
    },
    color: '#ffffff',
    fontSize: 16,
    padding: 4,
    transition: 'border-color 150ms ease-in-out',

    '&:hover': {
      border: {
        color: '#ffffff77'
      }
    },

    '&:active, &:focus': {
      border: {
        color: '#ffffffaa'
      },
      outline: 'none'
    }
  }
});

export default function Input(props: Props) {
  const classes = useStyles();

  const content = useContext(FormContentContext);
  const update = useContext(FormUpdateContext);

  if (!props.name) {
    throw new Error("Name is required for an input");
  }

  const value = content.find(({ id }) => id === props.name)?.value || '';

  return (
    <input
      {...props}
      className={`${classes.input} ${props.className}`}
      value={value}
      onInput={e => update(props.name!, e.currentTarget.value)}
    />
  )
}
