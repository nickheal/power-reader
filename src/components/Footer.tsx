import React from 'react';
import { Link as RouterLink } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { FiExternalLink } from 'react-icons/fi';
import { Routes } from '../utils/routes';

interface Props {}

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    padding: 16
  },
  link: {
    color: '#ffffff',
    margin: [0, 16],
    opacity: 0.5,
    transition: 'opacity 200ms ease-in-out',

    '&:hover, &:focus': {
      opacity: 1
    }
  }
});

export default function Button(props: Props) {
  const classes = useStyles({ ...props });

  return (
    <footer className={classes.footer}>
      <RouterLink className={classes.link} to={Routes.About}>About</RouterLink>
      <a className={classes.link} href="https://github.com/nickheal/power-reader" target="_blank">Open source <FiExternalLink /></a>
    </footer>
  );
}
