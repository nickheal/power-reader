import React from 'react';
import { createUseStyles } from 'react-jss';

export enum Tag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p'
} 

type Props = {
  tag?: Tag;
}

const useStyles = createUseStyles({
  heading: {
    color: '#ffffff',
    fontSize: 48,
    margin: [48, 0]
  }
});

export default function Heading(props: React.ReactNode & Props) {
  const classes = useStyles();

  const DynamicTag = props?.tag || Tag.P;

  return (
    <DynamicTag {...props} className={classes.heading} />
  );
}