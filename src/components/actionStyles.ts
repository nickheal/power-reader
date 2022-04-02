
import { createUseStyles } from 'react-jss';

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary'
}

type ActionProps = {
  variant?: Variant;
}

export const useStyles = createUseStyles({
  button: {
    background: (props: ActionProps) => props.variant === Variant.Primary ? 'linear-gradient(125deg, #3a52ffee, #33346dee)' : '#ffffff22',
    backdropFilter: 'blur(2px)',
    border: 0,
    borderRadius: 4,
    boxShadow: '3px 3px 5px #00000011',
    color: (props: ActionProps) => props.variant === Variant.Primary ? '#ffffff' : '#333333',
    cursor: 'pointer',
    display: 'inline-block',
    margin: 0,
    padding: [10, 12],
    textDecoration: 'none',
    transition: 'box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',

    '&:hover, &:focus': {
      boxShadow: '3px 3px 7px #00000010',
      transform: 'scale(1.01)'
    },

    '& > svg': {
      display: 'block'
    }
  }
});
