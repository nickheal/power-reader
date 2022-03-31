import React from 'react';
import { createUseStyles } from 'react-jss';
import { FiTrash2 } from 'react-icons/fi';
import Button from './Button';

interface Props {
  children: React.ReactNode;
  header: string;
  onDelete?: () => void;
}

const useStyles = createUseStyles({
  container: {
    borderRadius: 8,
    boxShadow: '3px 3px 10px #00000011',
    margin: [0, 'auto', 16],
    maxWidth: 320,
    overflow: 'hidden',
    width: '100%',

    '&.enter': {
      height: 0,
      marginBottom: 0
    },

    '&.enter-active': {
      height: 116,
      opacity: 1,
      transition: 'height 300ms, opacity 300ms'
    },

    '&.enter-done': {
      height: 'auto',
      marginBottom: 16
    },

    '&.exit': {
      height: 116,
      marginBottom: 0
    },

    '&.exit-active': {
      height: 0,
      opacity: 0,
      transition: 'height 300ms, opacity 300ms'
    }
  },
  top: {
    background: '#ffffff11',
    backdropFilter: 'blur(2px)',
    padding: 16,
    textAlign: 'right'
  },
  bottom: {
    background: '#ffffff',
    color: '#333333',
    padding: 16
  }
});

export default function Card(props: Props) {
  const classes = useStyles();

  return (
    <li className={classes.container}>
      <div className={classes.top}>
        { props.header }
        {props.onDelete ? (
          <Button type="button" onClick={props.onDelete}>
            <FiTrash2 color="#ffcccc" size="1.5em" />
          </Button>
        ) : null}
      </div>
      <div className={classes.bottom}>
        {props.children}
      </div>
    </li>
  )
}