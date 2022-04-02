import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { FiCheck, FiX } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import Button, { Props as ButtonProps } from './Button';

interface Props extends ButtonProps  {}

const TRANSITION_TIME = 200;

const useStyles = createUseStyles({
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

export default function ConfirmButton(props: Props) {
  const [inProgress, setInProgress] = useState(false);

  function onConfirm(e: React.MouseEvent<HTMLButtonElement>) {
    props?.onClick?.(e);
  }

  function onClickOrCancel() {
    setInProgress(!inProgress);
  }

  const classes = useStyles();
  return (
    <>
      <CSSTransition
        in={inProgress}
        timeout={TRANSITION_TIME}
        classNames={classes.buttonTransition}
      >
        {inProgress ? (
          <Button onClick={onConfirm}>
            <FiCheck color="#ffcccc" size="1.5em"  />
          </Button>
        ) : <></>}
      </CSSTransition>
      <Button onClick={onClickOrCancel}>
        <SwitchTransition>
          <CSSTransition
            key={inProgress ? 'true' : 'false'}
            timeout={TRANSITION_TIME}
            classNames={classes.buttonTransition}
          >
            {inProgress ? (
              <FiX color="#ffcccc" size="1.5em"  />
            ) : (
              props.children
            )}
          </CSSTransition>
        </SwitchTransition>
      </Button>
    </>
  );
}
