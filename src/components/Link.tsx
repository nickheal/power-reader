import React from 'react';
import { Link as RouterLink, GatsbyLinkProps } from 'gatsby';
import { useStyles, Variant } from './actionStyles';

interface Props extends Omit<GatsbyLinkProps<{}>, 'ref'> {
  variant?: Variant;
}


export default function Link(props: Props) {
  const classes = useStyles({ ...props });

  const {
    variant,
    ...passThroughProps
  } = props;

  return (
    <RouterLink
      {...passThroughProps}
      className={`${classes.button} ${props.className}`}
    >
      {props.children}
    </RouterLink>
  )
}
