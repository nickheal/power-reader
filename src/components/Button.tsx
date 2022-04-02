import React from 'react';
import { useStyles, Variant } from './actionStyles';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export default function Button(props: Props) {
  const classes = useStyles({ ...props });

  return (
    <button
      {...props}
      className={`${classes.button} ${props.className}`}
    />
  )
}
