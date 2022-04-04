import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    body: {
      background: 'linear-gradient(125deg, #3a52ff, #33346d)',
      fontFamily: 'Helvetica, Arial, sans-serif',
      margin: 0,
      minHeight: '100vh',
      padding: 0,
      transition: 'background 300ms ease-in-out'
    },
    '*': {
      boxSizing: 'border-box'
    }
  }
});

export default function GlobalStyles(props: any) {
  useStyles();

  return <>{ props.children }</>;
}
