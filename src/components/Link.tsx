import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useStyles } from './actionStyles';

interface Props extends LinkProps {}


export default function Link(props: Props) {
  const classes = useStyles();

  return (
    <RouterLink
      {...props}
      className={`${classes.button} ${props.className}`}
    />
  )
}
