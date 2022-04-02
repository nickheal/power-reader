import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { FormContentContext, FormUpdateContext } from '../contexts/Form';

interface Props extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
}

const useStyles = createUseStyles({
  label: {
    color: '#ffffff',
    display: 'block',
    margin: [0, 0, 8]
  },
  input: {
    backdropFilter: 'blur(2px)',
    background: '#ffffff0a',
    border: {
      color: '#ffffff33',
      width: [0, 0, 2, 0]
    },
    color: '#ffffff',
    display: 'block',
    fontSize: 16,
    fontFamily: 'Helvetica, Arial, sans-serif',
    height: 580,
    margin: [0, 0, 32],
    maxWidth: 640,
    padding: 8,
    resize: 'none',
    transition: 'border-color 150ms ease-in-out',
    width: '100%',

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
    <>
      <label className={classes.label} htmlFor={props.name}>{ props.label }:</label>
      <textarea
        {...props}
        className={`${classes.input} ${props.className}`}
        value={value}
        onInput={e => update(props.name!, e.currentTarget.value)}
      />
    </>
  )
}
