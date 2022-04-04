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
        This is an open source project. You can find a link to the source code in the footer.
      </P>

      <Heading tag={Tag.H2}>Roadmap</Heading>
      <P>Here is a loose set of items currently on my roadmap for this site.</P>
      <ul>
        <li>
          <P>
            Customisable read speed.
          </P>
        </li>
        <li>
          <P>
            Mobile support.
          </P>
        </li>
        <li>
          <P>
            Different styles of reader to trial (eg. constant horizontal scroll).
          </P>
        </li>
        <li>
          <P>
            Improved 404 page.
          </P>
        </li>
      </ul>
      <Link to={Routes.Dashboard} variant={Variant.Tertiary}>Home</Link>
    </StandardPage>
  );
}
