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
      <Heading tag={Tag.H1}>About</Heading>
      <P>
        ...
      </P>
      <Link to={Routes.Dashboard} variant={Variant.Tertiary}>Home</Link>
    </StandardPage>
  );
}
