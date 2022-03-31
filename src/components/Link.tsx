import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useStyles, Variant } from './actionStyles';

interface Props extends LinkProps {
  variant?: Variant
}


export default function Link(props: Props) {
  const classes = useStyles({ ...props });

  return (
    <RouterLink
      {...props}
      className={`${classes.button} ${props.className}`}
    />
  )
}
