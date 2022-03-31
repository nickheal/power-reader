import { ReaderDocument } from './readerDocument';

export type user = {
  id: string;
  firstName: string;
  documents: ReaderDocument[];
}
