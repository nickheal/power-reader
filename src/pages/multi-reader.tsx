import React, { useEffect, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { navigate } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { Routes } from '../utils/routes';
import { useUserState } from '../state/user';
import { getMultiDocument } from '../utils/document';
import PlayerControls from '../components/PlayerControls';
import ReadZone from '../components/ReadZone';

const TIME_PER_DOCUMENT = 30 * 1000;
const TRANSITION_TIME = 200;

const useStyles = createUseStyles({
  '@global': {
    body: {
      background: 'linear-gradient(125deg, #ffffff, #f0f0f0) !important'
    }
  },
  controlsContainer: {
    margin: [32, 0, 160],
    opacity: 0.1,
    padding: 16,
    textAlign: 'center',
    transition: 'opacity 300ms ease-in-out',

    '&:hover, &:focus': {
      opacity: 1
    }
  },
  headerTransition: {
    opacity: 0.25,
    transform: 'translateX(4px)',

    '&-enter': {
      opacity: 0.25,
      transform: 'translateX(4px)'
    },

    '&-enter-active': {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: `opacity ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1), transform ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    },

    '&-enter-done': {
      opacity: 1,
      transform: 'translateX(0px)',
    },

    '&-exit': {
      opacity: 1,
      transform: 'translateX(0px)',
    },

    '&-exit-active': {
      opacity: 0.25,
      transform: 'translateX(-4px)',
      transition: `opacity ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1), transform ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    },

    '&-exit-done': {
      opacity: 0.25,
      transform: 'translateX(4px)'
    },
  },
  transition: {
    opacity: 0,
    transform: 'translateX(4px)',

    '&-enter': {
      opacity: 0,
      transform: 'translateX(4px)'
    },

    '&-enter-active': {
      opacity: 1,
      transform: 'translateX(0px)',
      transition: `opacity ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1), transform ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    },

    '&-enter-done': {
      opacity: 1,
      transform: 'translateX(0px)',
    },

    '&-exit': {
      opacity: 1,
      transform: 'translateX(0px)',
    },

    '&-exit-active': {
      opacity: 0,
      transform: 'translateX(-4px)',
      transition: `opacity ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1), transform ${TRANSITION_TIME}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    },

    '&-exit-done': {
      opacity: 0,
      transform: 'translateX(4px)'
    },
  }
});

export default function MultiReader() {
  const [user, setUser] = useUserState();
  const [activeDocumentIndex, setActiveDocumentIndex] = useState(0);

  const documents = getMultiDocument(user);

  if (!documents) {
    console.error("Couldn't find document with this ID");
    if (typeof window !== 'undefined') navigate(Routes.Dashboard);
    return <main />;
  }

  const [documentIsPlaying, setDocumentIsPlaying] = useState<boolean[]>(documents.map(() => false));

  function onPlayPause() {
    const newArray = documentIsPlaying.map(() => false);
    if (!documentIsPlaying.find((isPlaying) => !!isPlaying)) {
      newArray[activeDocumentIndex] = true;
    }
    setDocumentIsPlaying(newArray);
  }

  function onRewind() {
    const updateDocuments = [...user.documents];
    documents!.forEach((document) => {
      const activeDocumentIndex = updateDocuments.indexOf(updateDocuments.find((updateDocument) => updateDocument.id === document.id)!);
      updateDocuments[activeDocumentIndex] = {
        ...updateDocuments[activeDocumentIndex],
        readerPosition: Math.max(document.readerPosition - 100, 0)
      };
    });
    setUser({
      ...user,
      documents: updateDocuments
    });
  }

  function onFastForward() {
    const updateDocuments = [...user.documents];
    documents!.forEach((document) => {
      const activeDocumentIndex = updateDocuments.indexOf(updateDocuments.find((updateDocument) => updateDocument.id === document.id)!);
      updateDocuments[activeDocumentIndex] = {
        ...updateDocuments[activeDocumentIndex],
        readerPosition: Math.min(document.readerPosition + 100, document.content.length)
      };
    });
    setUser({
      ...user,
      documents: updateDocuments
    });
  }

  function onRestart() {
    const updateDocuments = [...user.documents];
    documents!.forEach((document) => {
      const activeDocumentIndex = updateDocuments.indexOf(updateDocuments.find((updateDocument) => updateDocument.id === document.id)!);
      updateDocuments[activeDocumentIndex] = {
        ...updateDocuments[activeDocumentIndex],
        readerPosition: 0
      };
    });
    setUser({
      ...user,
      documents: updateDocuments
    });
  }

  useEffect(() => {
    if (!documentIsPlaying.find((isPlaying) => !!isPlaying) || typeof window === 'undefined') return;
  
    const timeout = window.setTimeout(() => {
      const newActiveDocumentIndex = (activeDocumentIndex + 1) % documents.length;
      const newArray = documentIsPlaying.map(() => false);
      newArray[newActiveDocumentIndex] = true;
      setDocumentIsPlaying(newArray);
      setActiveDocumentIndex(newActiveDocumentIndex);
    }, TIME_PER_DOCUMENT);

    return () => window.clearTimeout(timeout);
  }, [documentIsPlaying, setActiveDocumentIndex]);

  const classes = useStyles();

  return (
    <main>
      <section className={classes.controlsContainer}>
        <h1>
          {documents.map((document, index) => (
            <CSSTransition
              in={activeDocumentIndex === index}
              key={index}
              timeout={TRANSITION_TIME}
              classNames={classes.headerTransition}
            >
              <span>{ document.name }</span>
            </CSSTransition>
          ))}
        </h1>
        <PlayerControls
          isPlaying={!!documentIsPlaying.find((isPlaying) => !!isPlaying)}
          onRewind={onRewind}
          onPlayPause={onPlayPause}
          onFastForward={onFastForward}
          onRestart={onRestart}
        />
      </section>
      <SwitchTransition>
        <CSSTransition
          key={activeDocumentIndex}
          timeout={TRANSITION_TIME}
          classNames={classes.transition}
        >
          <ReadZone
            document={documents[activeDocumentIndex]}
            isPlaying={documentIsPlaying[activeDocumentIndex]}
            onComplete={() => onPlayPause()}
            speed={1 / user.readSpeed}
          />
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
}
