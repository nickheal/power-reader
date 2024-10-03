import { atom, useRecoilState } from 'recoil';
import { navigate } from 'gatsby';
import { Routes } from '../utils/routes';
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

export enum Mode {
  Line,
  Word,
}

export type User = {
  documents: ReaderDocument[];
  firstName: string;
  id: string;
  mode: Mode;
  readSpeed: number;
}

export const userState = atom<User>({
  key: ATOM_KEY_USER,
  default: createUser({ firstName: '' }),
  effects_UNSTABLE: [persistAtom],
});

export const useUserState = () => {
  const currentUserState = useRecoilState(userState);

  const [user, setUser] = currentUserState;

  if (typeof window !== 'undefined' && !user.firstName) {
    navigate(Routes.Introduction);
  }

  return [{
    ...createUser({ firstName: user.firstName }),
    ...user,
  }, setUser];
}

type CreateUser = {
  firstName: string;
}

export function createUser({ firstName }: CreateUser) {
  return {
    documents: [],
    firstName,
    id: uuidv4(),
    mode: Mode.Line,
    readSpeed: 60,
  }
}
