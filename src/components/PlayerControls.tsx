import React from 'react';
import { FiFastForward, FiGrid, FiPlay, FiPause, FiRewind, FiRotateCcw } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { Routes } from '../utils/routes';

type Props = {
  isPlaying: boolean;
  onRewind: () => void;
  onPlayPause: () => void;
  onFastForward: () => void;
  onRestart: () => void;
}

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

    '& > svg': {
      display: 'block'
    }
  }
});

export default function PlayerControls(props: Props) {
  const classes = useStyles();

  return (
    <>
      <Link className={classes.button} to={Routes.Dashboard}><FiGrid /></Link>
      <button className={classes.button} onClick={props.onRewind}><FiRewind /></button>
      <button className={classes.button} onClick={props.onPlayPause}>{props.isPlaying ? <FiPause /> : <FiPlay />}</button>
      <button className={classes.button} onClick={props.onFastForward}><FiFastForward /></button>
      <button className={classes.button} onClick={props.onRestart}><FiRotateCcw /></button>
    </>
  )
}
