
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  button: {
    background: '#ffffff22',
    backdropFilter: 'blur(2px)',
    border: 0,
    borderRadius: 4,
    boxShadow: '3px 3px 5px #00000011',
    color: '#333333',
    cursor: 'pointer',
    display: 'inline-block',
    margin: [8, 0, 0],
    padding: [6, 8, 4],
    textDecoration: 'none',
    transition: 'box-shadow 300ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',

    '&:hover, &:focus': {
      boxShadow: '3px 3px 7px #00000010',
      transform: 'scale(1.01)'
    }
  }
});
