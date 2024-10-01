import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReaderDocument } from '../state/user';
import { documentToWords, getActiveLines } from '../utils/document';
import { useReadZoneEffect } from './readZoneEffect';

type Props = {
  document: ReaderDocument;
  isPlaying: boolean;
  onComplete: () => void;
  speed: number;
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
    minWidth: 300,
    padding: [16, 32]
  },
  textLine: {
    fontSize: 24,
    margin: [8, 0],
    position: 'relative',
  },
  paraTextLine: {
    fontSize: 24,
    margin: [8, 0],
    opacity: 0.1
  }
});

export default function ReadZoneSingleWord({
  document,
  isPlaying,
  onComplete,
  speed
}: Readonly<Props>) {
  const { content, readerPosition } = document;

  const lines = documentToWords(content);

  const { activeLines } = getActiveLines(lines, readerPosition);

  useReadZoneEffect(document, isPlaying, onComplete, speed)

  const classes = useStyles();

  return (
    <section>
      <div className={classes.readZone}>
        <div className={classes.readZoneCentered}>
          <p className={classes.textLine}>{ activeLines[1] }</p>
        </div>
      </div>
    </section>
  );
}
