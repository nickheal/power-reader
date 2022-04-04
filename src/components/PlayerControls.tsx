import React from 'react';
import { Link } from 'gatsby';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { FiFastForward, FiGrid, FiPlay, FiPause, FiRewind, FiRotateCcw } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { Routes } from '../utils/routes';

type Props = {
  isPlaying: boolean;
  onRewind: () => void;
  onPlayPause: () => void;
  onFastForward: () => void;
  onRestart: () => void;
}

const TRANSITION_TIME = 150;

const useStyles = createUseStyles({
  button: {
    backdropFilter: 'blur(2px)',
    background: '#ffffffee',
    border: 0,
    borderRadius: 8,
    boxShadow: '3px 3px 10px #00000011',
    color: '#333',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 28,
    margin: [0, 8, 4],
    padding: [8, 10],
    verticalAlign: 'middle',

    '& svg': {
      display: 'block'
    }
  },
  buttonTransition: {
    '&-enter': {
      transform: 'scale(0)'
    },

    '&-enter-active': {
      transform: 'scale(1)',
      transition: `transform ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    },

    '&-enter-done': {
      transform: 'scale(1)'
    },

    '&-exit': {
      transform: 'scale(1)'
    },

    '&-exit-active': {
      transform: 'scale(0)',
      transition: `transform ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    }
  }
});

export default function PlayerControls(props: Props) {
  const classes = useStyles();

  return (
    <>
      <Link className={classes.button} to={Routes.Dashboard}><FiGrid /></Link>
      <button className={classes.button} onClick={props.onRewind}><FiRewind /></button>
      <button className={classes.button} onClick={props.onPlayPause}>
        <SwitchTransition>
          <CSSTransition
            key={props.isPlaying ? 'true' : 'false'}
            timeout={TRANSITION_TIME}
            classNames={classes.buttonTransition}
          >
            {props.isPlaying ? <FiPause /> : <FiPlay />}
          </CSSTransition>
        </SwitchTransition>
      </button>
      <button className={classes.button} onClick={props.onFastForward}><FiFastForward /></button>
      <button className={classes.button} onClick={props.onRestart}><FiRotateCcw /></button>
    </>
  )
}
