import React from 'react';
import { Routes } from '../utils/routes';
import Link from '../components/Link';

export default function Introduction() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>We've noticed that this is your first time using the site on this device.</p>
      <p>
        This is a "client-only" site. That means that everything you do here is stored on your device only.
        Great for privacy, not so great for convenience if you're using multiple devices. For now there is
        no handy workaround for this. Your best bet is to set-up on one device and stick to it.
      </p>
      <Link to={Routes.Setup}>Get started</Link>
    </main>
  );
}
