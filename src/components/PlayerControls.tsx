import React from 'react';
import { Link } from 'gatsby';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { FiFastForward, FiGrid, FiPlay, FiPause, FiRewind, FiRotateCcw } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { Routes } from '../utils/routes';
import { Mode, useUserState } from '../state/user';

type Props = {
  isPlaying: boolean;
  onRewind: () => void;
  onPlayPause: () => void;
  onFastForward: () => void;
  onRestart: () => void;
}

const TRANSITION_TIME = 150;

const buttonCss = {
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
}

const useStyles = createUseStyles({
  button: {
    ...buttonCss
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
  },
  groupedButton: {
    ...buttonCss,
    borderRight: 'solid 2px #f7f7f7',
    marginLeft: 0,
    marginRight: 0,
    opacity: 0.4,
    position: 'relative',

    '&:first-of-type': {
      borderRadius: [8, 0, 0, 8],
    },

    '&:last-of-type': {
      borderRadius: [0, 8, 8, 0],
      borderRight: 0,
    },
  },
  groupedButtonActive: {
    opacity: 1
  },
  groupedButtons: {
    display: 'inline-block',
    margin: [0, 8],
  }
});

export default function PlayerControls(props: Props) {
  const classes = useStyles();
  const [user, setUser] = useUserState();

  function onModeLine() {
    setUser({
      ...user,
      mode: Mode.Line
    })
  }

  function onModeWord() {
    setUser({
      ...user,
      mode: Mode.Word
    })
  }

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
      <div className={classes.groupedButtons}>
        <button className={`${classes.groupedButton}${user.mode === Mode.Line ? ` ${classes.groupedButtonActive}` : ''}`} onClick={onModeLine}>Line</button>
        <button className={`${classes.groupedButton}${user.mode === Mode.Word ? ` ${classes.groupedButtonActive}` : ''}`} onClick={onModeWord}>Word</button>
      </div>
    </>
  )
}
