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

export function getActiveLines(lines: string[], readerPosition: number): string[] {
  let scanPosition = 0;
  for (let i = 0; i < lines.length; i++) {
    scanPosition += lines[i].length + 1; // The 1 is for the space at the end of the line
    const foundPosition = scanPosition >= readerPosition;
    if (foundPosition) {
      return [lines[i - 1] || ' ', lines[i], lines[i + 1] || ' '];
    }
  }
  throw new Error(`Couldn't find reading position in document`);
}
