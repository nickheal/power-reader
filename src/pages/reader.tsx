import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { Routes } from '../utils/routes';
import { useUserState } from '../state/user';
import { getDocument } from '../utils/document';
import PlayerControls from '../components/PlayerControls';
import ReadZone from '../components/ReadZone';

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
  }
});

export default function Reader() {
  const classes = useStyles();
  const [user, setUser] = useUserState();
  const [isPlaying, setIsPlaying] = useState(false);

  const document = getDocument(user);

  if (!document) {
    console.error("Couldn't find document with this ID");
    if (typeof window !== 'undefined') navigate(Routes.Dashboard);
    return <main />;
  }

  function onPlayPause() {
    setIsPlaying(!isPlaying);
  }

  function onRewind() {
    const updateDocuments = [...user.documents];
    updateDocuments[updateDocuments.indexOf(document!)] = {
      ...updateDocuments[updateDocuments.indexOf(document!)],
      readerPosition: Math.max(document!.readerPosition - 100, 0)
    };
    setUser({
      ...user,
      documents: updateDocuments
    });
  }

  function onFastForward() {
    const updateDocuments = [...user.documents];
    updateDocuments[updateDocuments.indexOf(document!)] = {
      ...updateDocuments[updateDocuments.indexOf(document!)],
      readerPosition: Math.min(document!.readerPosition + 100, document!.content.length)
    };
    setUser({
      ...user,
      documents: updateDocuments
    });
  }

  function onRestart() {
    const updateDocuments = [...user.documents];
    updateDocuments[updateDocuments.indexOf(document!)] = {
      ...updateDocuments[updateDocuments.indexOf(document!)],
      readerPosition: 0
    };
    setUser({
      ...user,
      documents: updateDocuments
    });
  }

  return (
    <main>
      <section className={classes.controlsContainer}>
        <h1>{ document.name }</h1>
        <PlayerControls
          isPlaying={isPlaying}
          onRewind={onRewind}
          onPlayPause={onPlayPause}
          onFastForward={onFastForward}
          onRestart={onRestart}
        />
      </section>
      <ReadZone
        document={document}
        isPlaying={isPlaying}
        onComplete={onPlayPause}
        speed={1 / user.readSpeed}
      />
    </main>
  );
}
