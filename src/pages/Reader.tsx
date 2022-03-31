import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useRecoilState } from 'recoil';
import { userState } from '../state/user';
import { documentToLines, getActiveLines } from '../utils/document';
import Button from '../components/Button';

const READ_SPEED = 0.17;

const useStyles = createUseStyles({
  '@global': {
    body: {
      background: 'linear-gradient(125deg, #ffffff, #f7f7f7) !important'
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
    margin: [8, 0]
  },
  paraTextLine: {
    fontSize: 24,
    margin: [8, 0],
    opacity: 0.2
  }
});

export default function Dashboard() {
  const classes = useStyles();
  const [user, setUser] = useRecoilState(userState);
  const { id } = useParams();

  const document = user?.documents?.find(document => document.id === id);

  if (!document) throw new Error(`Couldn't find document with ID ${id}`);

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

  const activeLines = getActiveLines(lines, readerPosition);

  useEffect(() => {
    if (document.readerPosition >= document.content.length) return;
  
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
  }, [document, user, setUser]);

  return (
    <main>
      <h1>Document reader</h1>
      <section>
        <Button onClick={onRestart}>Restart</Button>
      </section>
      <section>
        <h2>{ name }</h2>
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
