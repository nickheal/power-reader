import React from 'react';
import { createUseStyles } from 'react-jss';
import { FiTrash2 } from 'react-icons/fi';
import Button from './Button';

interface Props {
  children: React.ReactNode;
  header: string;
  onDelete?: () => void;
  progress: number;
}

const useStyles = createUseStyles({
  container: {
    borderRadius: 8,
    boxShadow: '3px 3px 10px #00000011',
    margin: [0, 0, 32, '2%'],
    maxWidth: '32%',
    overflow: 'hidden',
    width: '100%',

    '&:nth-child(3n - 2)': {
      marginLeft: 0
    },

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
    alignItems: 'center',
    background: '#ffffff11',
    backdropFilter: 'blur(2px)',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 16,
    position: 'relative',
    textAlign: 'right'
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    margin: 0
  },
  bottom: {
    background: '#ffffff',
    color: '#333333',
    padding: 16
  },
  progressBar: {
    backdropFilter: 'blur(2px)',
    background: '#00ff0099',
    bottom: 0,
    display: 'block',
    height: 4,
    left: 0,
    position: 'absolute',
    width: (props: Props) => `${props.progress}%`
  }
});

export default function Card(props: Props) {
  const classes = useStyles({ ...props });

  return (
    <li className={classes.container}>
      <div className={classes.top}>
        <p className={classes.title}>{ props.header }</p>
        {props.onDelete ? (
          <Button type="button" onClick={props.onDelete}>
            <FiTrash2 color="#ffcccc" size="1.5em" />
          </Button>
        ) : null}
        <div className={classes.progressBar} />
      </div>
      <div className={classes.bottom}>
        {props.children}
      </div>
    </li>
  )
}