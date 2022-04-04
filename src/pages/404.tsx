import * as React from 'react'
import { Link } from 'gatsby'
import Heading, { Tag } from '../components/Heading';
import StandardPage from '../components/StandardPage';

// markup
const NotFoundPage = () => {
  return (
    <StandardPage>
      <Heading tag={Tag.H1}>404</Heading>
      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </StandardPage>
  )
}

export default NotFoundPage
