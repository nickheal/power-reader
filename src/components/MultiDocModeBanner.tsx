import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { createUseStyles } from 'react-jss';
import Link from './Link';
import { Variant } from '../components/actionStyles';
import { Routes } from '../utils/routes';

type Props = {
  active: boolean;
  docs: Set<string>;
}

const TRANSITION_TIME = 200;

const useStyles = createUseStyles({
  container: {
    background: '#ffffff11',
    backdropFilter: 'blur(2px)',
    bottom: 0,
    color: '#ffffff',
    fontSize: 32,
    left: 0,
    padding: [32, 64, 128],
    position: 'fixed',
    transform: 'translateY(100%)',
    width: '100%',
    zIndex: 1,

    '&-enter': {
      transform: 'translateY(100%)'
    },

    '&-enter-active': {
      transform: 'translateY(calc(0px + 64px))',
      transition: `transform ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    },

    '&-enter-done': {
      transform: 'translateY(calc(0px + 64px))'
    },

    '&-exit': {
      transform: 'translateY(calc(0px + 64px))'
    },

    '&-exit-active': {
      transform: 'translateY(100%)',
      transition: `transform ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    }
  }
});

export default function MultiDocModeBanner({
  active,
  docs
}: Props) {
  const classes = useStyles();
  return (
    <CSSTransition
      in={active}
      timeout={TRANSITION_TIME}
      classNames={classes.container}
    >
      <aside className={classes.container}>
        <h2>Multi reader mode.</h2>
        <p>This is an experimental reader that automatically switches between 2 documents every 30s.</p>
        <Link to={Routes.MultiReader.replace('{ids}', encodeURIComponent(JSON.stringify([...docs])))} variant={Variant.Tertiary}>
          Read now
        </Link>
      </aside>
    </CSSTransition>
  );
}
