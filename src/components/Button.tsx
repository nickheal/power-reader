import React from 'react';
import { useStyles } from './actionStyles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: Props) {
  const classes = useStyles();

  return (
    <button
      {...props}
      className={`${classes.button} ${props.className}`}
    />
  )
}
