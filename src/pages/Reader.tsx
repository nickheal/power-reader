import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useRecoilState } from 'recoil';
import { userState } from '../state/user';
import { documentToLines, getActiveLines } from '../utils/document';
import PlayerControls from '../components/PlayerControls';

const READ_SPEED = 0.17;

type Styles = {
  lineProgress: number;
}

const useStyles = createUseStyles({
  '@global': {
    body: {
      background: 'linear-gradient(125deg, #ffffff, #f7f7f7) !important'
    }
  },
  controlsContainer: {
    margin: [32, 0, 160],
    opacity: 0.4,
    padding: 16,
    textAlign: 'center',
    transition: 'opacity 300ms ease-in-out',

    '&:hover, &:focus': {
      opacity: 1
    }
  },
  readZone: {
    display: 'flex',
    justifyContent: 'center'
  },
  readZoneCentered: {
    border: 0,
    borderLeft: 'solid 2px #333333aa',
    display: 'inline-block',
    padding: [16, 32]
  },
  textLine: {
    fontSize: 24,
    margin: [8, 0],
    position: 'relative',

    '&::after': {
      backdropFilter: 'blur(2px)',
      background: '#0000000f',
      bottom: 0,
      boxShadow: '3px 3px 10px #00000011',
      content: '""',
      display: 'block',
      left: 0,
      height: '100%',
      position: 'absolute',
      transform: ({ lineProgress }: Styles) => `scaleX(${lineProgress / 100})`,
      transformOrigin: 'left',
      transition: 'transform 20ms linear',
      width: '100%',
      zIndex: -1
    }
  },
  paraTextLine: {
    fontSize: 24,
    margin: [8, 0],
    opacity: 0.1
  }
});

export default function Dashboard() {
  const [user, setUser] = useRecoilState(userState);
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams();

  const document = user?.documents?.find(document => document.id === id);

  if (!document) throw new Error(`Couldn't find document with ID ${id}`);

  function onPlayPause() {
    setIsPlaying(!isPlaying);
  }

  function onRewind() {
    const eUser = user!;
    const updateDocuments = [...eUser.documents];
    updateDocuments[updateDocuments.indexOf(document!)] = {
      ...updateDocuments[updateDocuments.indexOf(document!)],
      readerPosition: Math.max(document!.readerPosition - 100, 0)
    };
    setUser({
      ...eUser,
      documents: updateDocuments
    });
  }

  function onFastForward() {
    const eUser = user!;
    const updateDocuments = [...eUser.documents];
    updateDocuments[updateDocuments.indexOf(document!)] = {
      ...updateDocuments[updateDocuments.indexOf(document!)],
      readerPosition: Math.min(document!.readerPosition + 100, document!.content.length)
    };
    setUser({
      ...eUser,
      documents: updateDocuments
    });
  }

  function onRestart() {
    const eUser = user!;
    const updateDocuments = [...eUser.documents];
    updateDocuments[updateDocuments.indexOf(document!)] = {
      ...updateDocuments[updateDocuments.indexOf(document!)],
      readerPosition: 0
    };
    setUser({
      ...eUser,
      documents: updateDocuments
    });
  }

  const { content, name, readerPosition } = document;

  const lines = documentToLines(content);

  const { activeLines, lineProgress } = getActiveLines(lines, readerPosition);

  useEffect(() => {
    if (!isPlaying || document.readerPosition >= document.content.length) return;
  
    const timeout = window.setTimeout(() => {
      const eUser = user!;
      const updateDocuments = [...eUser.documents];
      updateDocuments[updateDocuments.indexOf(document)] = {
        ...updateDocuments[updateDocuments.indexOf(document)],
        readerPosition: updateDocuments[updateDocuments.indexOf(document)].readerPosition + 1
      };
      setUser({
        ...eUser,
        documents: updateDocuments
      });
    }, READ_SPEED * 100);

    return () => window.clearTimeout(timeout);
  }, [document, isPlaying, user, setUser]);

  const classes = useStyles({ lineProgress });

  return (
    <main>
      <section className={classes.controlsContainer}>
        <h1>{ name }</h1>
        <PlayerControls
          isPlaying={isPlaying}
          onRewind={onRewind}
          onPlayPause={onPlayPause}
          onFastForward={onFastForward}
          onRestart={onRestart}
        />
      </section>
      <section>
        <div className={classes.readZone}>
          <div className={classes.readZoneCentered}>
            <p className={classes.paraTextLine}>{ activeLines[0] }</p>
            <p className={classes.textLine}>{ activeLines[1] }</p>
            <p className={classes.paraTextLine}>{ activeLines[2] }</p>
          </div>
        </div>
      </section>
    </main>
  );
}
