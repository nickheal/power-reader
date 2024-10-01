import { User } from '../state/user';

export const MAX_DOCS_FOR_MULTI_DOC = 2;

function snipFirstLine(document: string, maxLineLength: number): string[] {
  for (let i = maxLineLength; i >= 0; i--) {
    const finishedDocument = !document[i];
    const unbrokenWordLongerThanMaxLength = i === 0;

    if (finishedDocument) {
      return [document.trim()];
    } else if (unbrokenWordLongerThanMaxLength) {
      return [document.substring(0, maxLineLength).trim(), ...snipFirstLine(document.substring(maxLineLength), maxLineLength)];
    } else if (document[i] === ' ') {
      return [document.substring(0, i).trim(), ...snipFirstLine(document.substring(i), maxLineLength)];
    }
  }

  return [];
}

export function documentToLines(document: string, maxLineLength: number = 60) {
  return snipFirstLine(document, maxLineLength);
}

export function documentToWords(document: string) {
  return document.split(/\s/).filter(_ => !!_);
}

type ActiveLines = {
  activeLines: string[];
  lineProgress: number;
}

export function getActiveLines(lines: string[], readerPosition: number): ActiveLines {
  let scanPosition = 0;
  for (let i = 0; i < lines.length; i++) {
    scanPosition += lines[i].length + 1; // The 1 is for the space at the end of the line
    const foundPosition = scanPosition >= readerPosition;
    if (foundPosition) {
      const lineStart = scanPosition - (lines[i].length + 1);
      const lineEnd = scanPosition;
      const lineLength = lineEnd - lineStart;
      const linePosition = readerPosition - lineStart;
      return {
        activeLines: [lines[i - 1] || ' ', lines[i], lines[i + 1] || ' '],
        lineProgress: (linePosition / lineLength) * 100
      };
    }
  }
  throw new Error(`Couldn't find reading position in document`);
}

export function getDocument(user: User) {
  if (typeof window !== 'undefined') {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return user.documents.find(document => document.id === urlParams.get('id'));
  }

  return null;
}

export function getMultiDocument(user: User) {
  if (typeof window !== 'undefined') {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const ids = JSON.parse(urlParams.get('ids')!);
    return user.documents.filter(document => ids.includes(document.id));
  }

  return null;
}
