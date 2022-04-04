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

export type User = {
  id: string;
  firstName: string;
  documents: ReaderDocument[];
}

export const userState = atom<User>({
  key: ATOM_KEY_USER,
  default: createUser({ firstName: '' }),
  effects_UNSTABLE: [persistAtom],
});

export const useUserState = () => {
  const currentUserState = useRecoilState(userState);

  const [user, setUser] = currentUserState;

  if (typeof window !== undefined && !user.firstName) {
    navigate(Routes.Introduction);
  }

  return currentUserState;
}

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
