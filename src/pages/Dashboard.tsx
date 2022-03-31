import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../state/user';
import Link from '../components/Link';
import { Routes } from '../utils/routes';
import Card from '../components/Card';
import DocumentCard from '../components/DocumentCard';

const CONTENT_PREVIEW_LENGTH = 128;

export default function Dashboard() {
  const [user] = useRecoilState(userState);

  return (
    <main>
      <p>Welcome {user?.firstName}!</p>

      {user?.documents?.length ? (
        <>
          <ul>
            {user.documents.map((document) => (
              <DocumentCard header={document.name} key={document.id}>
                { document.content.substring(document.readerPosition, CONTENT_PREVIEW_LENGTH) }{document.content.length >= CONTENT_PREVIEW_LENGTH ? '...' : ''}
                { document.readerPosition }–{ document.content.length }
                <Link to={Routes.Reader.replace(':id', document.id)}>
                  {document.readerPosition !== 0 ? 'Continue reading' : 'Read now'}
                </Link>
              </DocumentCard>
            ))}
          </ul>
          <Card>
            Would you like to add another document?
            <Link to={Routes.CreateDocument}>Yes please</Link>
          </Card>
        </>
      ) : (
        <Card>
          You haven't got any documents to read yet. Would you like to create one?
          <Link to={Routes.CreateDocument}>Yes please</Link>
        </Card>
      )}
    </main>
  );
}
