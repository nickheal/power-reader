import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useRecoilState } from 'recoil';
import { userState } from '../state/user';
import { documentToLines } from '../utils/document';

const READ_SPEED = 1;

const useStyles = createUseStyles({
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
    margin: 0
  }
});

export default function Dashboard() {
  const classes = useStyles();
  const [user, setUser] = useRecoilState(userState);
  const { id } = useParams();

  const document = user?.documents?.find(document => document.id === id);

  if (!document) throw new Error(`Couldn't find document with ID ${id}`);

  const { content, name, readerPosition } = document;

  const lines = documentToLines(content);

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

  console.log(readerPosition);

  return (
    <main>
      <h1>Document reader</h1>
      <h2>{ name }</h2>
      <div className={classes.readZone}>
        <div className={classes.readZoneCentered}>
          {lines.map((line, index) => <p className={classes.textLine} key={index}>{ line }</p>)}
        </div>
      </div>
    </main>
  );
}
