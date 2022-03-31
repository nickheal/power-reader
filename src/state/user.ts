import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

const ATOM_KEY_USER = 'user';

export type ReaderDocument = {
  id: string;
  name: string;
  content: string;
  readerPosition: number;
}

export type User = {
  id: string;
  firstName: string;
  documents: ReaderDocument[];
}

export const userState = atom<User | null>({
  key: ATOM_KEY_USER,
  default: null,
  effects_UNSTABLE: [persistAtom],
});

type CreateUser = {
  firstName: string;
}

export function createUser({ firstName }: CreateUser) {
  return {
    id: uuidv4(),
    firstName,
    documents: []
  }
}
