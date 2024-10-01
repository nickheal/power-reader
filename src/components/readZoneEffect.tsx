import { useEffect } from 'react';
import { ReaderDocument, useUserState } from '../state/user';

export function useReadZoneEffect(
  document: ReaderDocument,
  isPlaying: boolean,
  onComplete: () => void, 
  speed: number
) {
  const [user, setUser] = useUserState();

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
}