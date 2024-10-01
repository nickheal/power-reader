import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useUserState } from '../state/user';
import { ReaderDocument } from '../state/user';
import { documentToLines, getActiveLines } from '../utils/document';

type Props = {
  document: ReaderDocument;
  isPlaying: boolean;
  onComplete: () => void;
  speed: number;
}

type Styles = {
  lineProgress: number;
}

const useStyles = createUseStyles({
  readZone: {
    display: 'flex',
    justifyContent: 'center'
  },
  readZoneCentered: {
    border: 0,
    borderLeft: 'solid 2px #33333333',
    display: 'inline-block',
    minWidth: 728,
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

export default function ReadZone({
  document,
  isPlaying,
  onComplete,
  speed
}: Props) {
  const [user, setUser] = useUserState();

  const { content, name, readerPosition } = document;

  const lines = documentToLines(content);

  const { activeLines, lineProgress } = getActiveLines(lines, readerPosition);

  useEffect(() => {
    if (!isPlaying || typeof window === 'undefined') return;
    if (document.readerPosition >= document.content.length) onComplete();
  
    const timeout = window.setTimeout(() => {
      const updateDocuments = [...user.documents];
      const activeDocumentIndex = updateDocuments.indexOf(updateDocuments.find((updateDocument) => updateDocument.id === document.id)!);
      updateDocuments[activeDocumentIndex] = {
        ...updateDocuments[activeDocumentIndex],
        readerPosition: updateDocuments[activeDocumentIndex].readerPosition + 1
      };
      setUser({
        ...user,
        documents: updateDocuments
      });
    }, speed * 1000);

    return () => window.clearTimeout(timeout);
  }, [document, isPlaying, user, setUser]);

  const classes = useStyles({ lineProgress });

  return (
    <section>
      <div className={classes.readZone}>
        <div className={classes.readZoneCentered}>
          <p className={classes.paraTextLine}>{ activeLines[0] }</p>
          <p className={classes.textLine}>{ activeLines[1] }</p>
          <p className={classes.paraTextLine}>{ activeLines[2] }</p>
        </div>
      </div>
    </section>
  );
}
