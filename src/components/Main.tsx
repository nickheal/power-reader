import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  main: {
    padding: [0, 64]
  }
});

export default function Main(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
  const classes = useStyles();

  return <main {...props} className={classes.main} />
}
