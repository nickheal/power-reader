import React from 'react';
import { createUseStyles } from 'react-jss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const useStyles = createUseStyles({
  button: {
    background: '#ffffff22',
    backdropFilter: 'blur(2px)',
    border: 0,
    borderRadius: 4,
    boxShadow: '3px 3px 5px #00000011',
    cursor: 'pointer',
    padding: [6, 8, 4],
    transition: 'box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',

    '&:hover, &:focus': {
      boxShadow: '3px 3px 7px #00000010',
      transform: 'scale(1.05)'
    }
  }
});

export default function Button(props: Props) {
  const classes = useStyles();

  return (
    <button
      {...props}
      className={`${classes.button} ${props.className}`}
    />
  )
}
