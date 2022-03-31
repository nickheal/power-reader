import { createContext } from 'react';

export interface FormEntry {
  id: string;
  value: string;
}

type FormUpdate = (name: string, value: string) => void;

export interface FormReturn {
  [key: string]: string;
}

export const FormContentContext = createContext<FormEntry[]>([]);
export const FormUpdateContext = createContext<FormUpdate>(() => {});
