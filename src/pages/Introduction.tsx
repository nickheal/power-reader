import React from 'react';
import { createUseStyles } from 'react-jss';
import { Routes } from '../utils/routes';
import Heading, { Tag } from '../components/Heading';
import Link from '../components/Link';
import { Variant } from '../components/actionStyles';
import Main from '../components/Main';

const useStyles = createUseStyles({
  paragraph: {
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 1.4,
    maxWidth: 728
  }
});

export default function Introduction() {
  const classes = useStyles();

  return (
    <Main>
      <Heading tag={Tag.H1}>Welcome!</Heading>
      <p className={classes.paragraph}>We've noticed that this is your first time using the site on this device.</p>
      <p className={classes.paragraph}>
        This is a "client-only" site. That means that everything you do here is stored on your device only.
        Great for privacy, not so great for convenience if you're using multiple devices. For now there is
        no handy workaround for this. Your best bet is to set-up on one device and stick to it.
      </p>
      <Link to={Routes.Setup} variant={Variant.Tertiary}>Get started</Link>
    </Main>
  );
}
