import React from 'react';
import { navigate } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { Variant } from '../components/actionStyles';
import { useUserState } from '../state/user';
import StandardPage from '../components/StandardPage';
import Link from '../components/Link';
import { Routes } from '../utils/routes';
import Heading, { Tag } from '../components/Heading';
import Card from '../components/Card';
import DocumentCard from '../components/DocumentCard';
import { LETTERS_PER_SECOND } from '../utils/document';

const CONTENT_PREVIEW_LENGTH = 256;

const useStyles = createUseStyles({
  docGrid: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    listStyleType: 'none',
    margin: 0,
    padding: 0
  }
});

export default function Dashboard() {
  const [user, setUser] = useUserState();

  function onDelete(id: string) {
    setUser({
      ...user,
      documents: user.documents.filter((document) => document.id !== id)
    });
  }
  
  const classes = useStyles();
  return (
    <StandardPage>
      <Heading tag={Tag.H1}>Welcome {user?.firstName}!</Heading>

      {user?.documents?.length ? (
        <>
          <ul className={classes.docGrid}>
            {user.documents.map((document) => (
              <DocumentCard
                header={document.name}
                key={document.id}
                onEdit={() => navigate(Routes.EditDocument.replace('{id}', document.id))}
                onDelete={() => onDelete(document.id)}
                progress={(document.readerPosition / document.content.length) * 100}
                secondsRemaining={(document.content.length - document.readerPosition) / LETTERS_PER_SECOND}
              >
                <p>
                  { document.readerPosition - (CONTENT_PREVIEW_LENGTH / 2) > 0 ? '...' : '' }
                  { document.content.substring(document.readerPosition - (CONTENT_PREVIEW_LENGTH / 2), document.readerPosition + (CONTENT_PREVIEW_LENGTH / 2)) }
                  { document.content.length >= CONTENT_PREVIEW_LENGTH ? '...' : '' }
                </p>
                <Link to={Routes.Reader.replace('{id}', document.id)} variant={Variant.Primary}>
                  {document.readerPosition !== 0 ? 'Continue reading' : 'Read now'}
                </Link>
              </DocumentCard>
            ))}
          </ul>
          <Card>
            <p>Would you like to add another document?</p>
            <Link to={Routes.CreateDocument} variant={Variant.Primary}>Yes please</Link>
          </Card>
        </>
      ) : (
        <Card>
          <p>You haven't got any documents to read yet. Would you like to create one?</p>
          <Link to={Routes.CreateDocument} variant={Variant.Primary}>Yes please</Link>
        </Card>
      )}
    </StandardPage>
  );
}
