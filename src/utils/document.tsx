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
