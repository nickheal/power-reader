import React from 'react';
import { Routes } from '../utils/routes';
import Heading, { Tag } from '../components/Heading';
import Link from '../components/Link';
import P from '../components/Paragraph';
import { Variant } from '../components/actionStyles';
import StandardPage from '../components/StandardPage';

export default function Introduction() {
  return (
    <StandardPage>
      <Heading tag={Tag.H1}>Welcome!</Heading>
      <P>
        Power reader is something of an experiment to try and improve the experience of reading on a computer
        screen. It's based of my own experiences combined with some tips from a book on speed reading that I
        once read.
      </P>
      <P>
        It is currently large-screened devices only. That's not to say that it won't try and load on a mobile device, just that
        I'm not sure what the result would be, and it probably wouldn't be pretty. To be honest the concept as a
        whole would probably need a rethink to make it work on a mobile-sized screen.
      </P>
      <P>We've noticed that this is your first time using the site on this device.</P>
      <P>
        This is a "client-only" site. That means that everything you do here is stored on your device only.
        Great for privacy, not so great for convenience if you're using multiple devices. For now there is
        no handy workaround for this. Your best bet is to set-up on one device and stick to it.
      </P>
      <Link to={Routes.Setup} variant={Variant.Tertiary}>Get started</Link>
    </StandardPage>
  );
}
