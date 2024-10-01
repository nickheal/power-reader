import React, { useState } from 'react';
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
import MultiDocModeBanner from '../components/MultiDocModeBanner';
import { MAX_DOCS_FOR_MULTI_DOC } from '../utils/document';
import { UnboundInput } from '../components/Input';

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
  },
  readSpeedForm: {
    marginBottom: 32
  },
  readSpeedFieldset: {
    border: 0
  },
  readSpeedLabel: {
    display: 'block'
  }
});

export default function Dashboard() {
  const [user, setUser] = useUserState();
  const [multiDocSelect, setMultiDocSelect] = useState(new Set<string>());
  
  function onCheckSelect(id: string) {
    if (multiDocSelect.has(id)) {
      multiDocSelect.delete(id);
    } else {
      multiDocSelect.add(id);
    }
    setMultiDocSelect(new Set<string>(multiDocSelect));
  }

  function onDelete(id: string) {
    if (multiDocSelect.has(id)) onCheckSelect(id);

    setUser({
      ...user,
      documents: user.documents.filter((document) => document.id !== id)
    });
  }

  
  const classes = useStyles();
  return (
    <StandardPage>
      <Heading tag={Tag.H1}>Welcome {user?.firstName}!</Heading>

      <form className={classes.readSpeedForm} onSubmit={(e) => e.preventDefault()}>
        <fieldset className={classes.readSpeedFieldset}>
          <UnboundInput
            label="Preferred read speed"
            name="read-speed"
            type="number"
            min="20"
            max="120"
            value={user.readSpeed}
            onInput={(e) => {
              setUser({
                ...user,
                readSpeed: +e.target.value
              });
            }}
          />
        </fieldset>
      </form>

      {user?.documents?.length ? (
        <>
          <MultiDocModeBanner active={multiDocSelect.size === MAX_DOCS_FOR_MULTI_DOC} docs={multiDocSelect} />
          <ul className={classes.docGrid}>
            {user.documents.map((document) => (
              <DocumentCard
                header={document.name}
                key={document.id}
                onEdit={() => navigate(Routes.EditDocument.replace('{id}', document.id))}
                onDelete={() => onDelete(document.id)}
                onCheckSelect={multiDocSelect.size < MAX_DOCS_FOR_MULTI_DOC || multiDocSelect.has(document.id) ? () => onCheckSelect(document.id) : undefined}
                isChecked={multiDocSelect.has(document.id)}
                progress={(document.readerPosition / document.content.length) * 100}
                secondsRemaining={(document.content.length - document.readerPosition) / user.readSpeed}
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
