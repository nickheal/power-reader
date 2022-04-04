import * as React from 'react'
import { Link } from 'gatsby'
import Heading, { Tag } from '../components/Heading';
import Main from '../components/Main';

// markup
const NotFoundPage = () => {
  return (
    <Main>
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
    </Main>
  )
}

export default NotFoundPage
