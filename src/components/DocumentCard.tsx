import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { createUseStyles } from 'react-jss';
import { FiEdit3, FiSquare, FiCheckSquare, FiTrash2 } from 'react-icons/fi';
import Button from './Button';
import ConfirmButton from './ConfirmButton';

interface Props {
  children: React.ReactNode;
  header: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onCheckSelect?: () => void;
  isChecked?: boolean;
  progress: number;
  secondsRemaining: number;
}

const TRANSITION_TIME = 200;

const useStyles = createUseStyles({
  container: {
    borderRadius: 8,
    boxShadow: '3px 3px 10px #00000011',
    margin: [0, 0, 32],
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',

    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
      margin: [0, 0, 32, '2%'],
      maxWidth: '49%',

      '&:nth-child(2n - 1)': {
        marginLeft: 0
      }
    },

    '@media screen and (min-width: 1024px)': {
      margin: [0, 0, 32, '2%'],
      maxWidth: '32%',

      '&:nth-child(3n - 2)': {
        marginLeft: 0
      }
    }
  },
  top: {
    alignItems: 'center',
    background: '#ffffff11',
    backdropFilter: 'blur(2px)',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: [20, 128, 20, 16],
    position: 'relative',
    textAlign: 'left'
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
  },
  actionContainer: {
    position: 'absolute',
    right: 8,
    top: '50%',
    transform: 'translateY(-50%)',
  
    '& > *': {
      margin: [0, 4]
    }
  },
  remainingTime: {
    fontSize: 10,
    marginLeft: 16,
    opacity: 0.9
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

function secondsToString(secondsInput: number) {
  if (secondsInput <= 0) return 'Complete';

  const hours = Math.floor(secondsInput / 3600);
  const minutesRemainder = secondsInput % 3600;
  const minutes = Math.floor(minutesRemainder / 60);
  const secondsRemainder = minutesRemainder % 60;
  const seconds = Math.max(Math.floor(secondsRemainder % 60), 1);

  const hoursString = hours > 0 ? `${hours}h ` : '';
  const minutesString = minutes > 0 ? `${minutes}m ` : '';
  const secondsString = seconds > 0 ? `${seconds}s` : '';

  const formattedString = `${hoursString}${minutesString}${secondsString} remaining`;

  return formattedString;
}

export default function Card(props: Props) {
  const classes = useStyles({ ...props });

  return (
    <li className={classes.container}>
      <div className={classes.top}>
        <p className={classes.title}>
          { props.header }
          <span className={classes.remainingTime}>{ secondsToString(props.secondsRemaining) }</span>
        </p>
        <div className={classes.actionContainer}>
          {props.onCheckSelect || props.isChecked ? (
            <Button type="button" onClick={props.onCheckSelect}>
              <SwitchTransition>
                <CSSTransition
                  key={props.isChecked ? 'true' : 'false'}
                  timeout={TRANSITION_TIME}
                  classNames={classes.buttonTransition}
                >
                  {props.isChecked ? <FiCheckSquare color="#ffcccc" size="1.5em" /> : <FiSquare color="#ffcccc" size="1.5em" />}
                </CSSTransition>
              </SwitchTransition>
            </Button>
          ) : null}
          {props.onEdit ? (
            <Button type="button" onClick={props.onEdit}>
              <FiEdit3 color="#ffcccc" size="1.5em" />
            </Button>
          ) : null}
          {props.onDelete ? (
            <ConfirmButton type="button" onClick={props.onDelete}>
              <FiTrash2 color="#ffcccc" size="1.5em" />
            </ConfirmButton>
          ) : null}
        </div>
        <div className={classes.progressBar} />
      </div>
      <div className={classes.bottom}>
        {props.children}
      </div>
    </li>
  )
}