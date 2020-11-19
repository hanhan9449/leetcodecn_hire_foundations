import { LK_Error, LK_ErrorMessage } from './interfaces/error-message.interface';
import { getErrorMessage } from './utils/getErrorMessage';
import { BrowserEnum } from './enums/Browser.enum';
import getError from './utils/getError';
import { getBrowserFlag } from './utils/getBrowserFlag';
import { isAnonymousLine } from './utils/isAnonymousLine';

export function sum(a: number, b: number) {
  return a + b;
}

export function solve(s: string): LK_ErrorMessage {
  let errorMessage = '';
  const stack: LK_Error[] = [];
  const flag: BrowserEnum = getBrowserFlag(s);
  const lines = s.split('\n');
  const empty = /^ *$/;
  for (let i = 0; i < lines.length; ++i) {
    if (isAnonymousLine(lines[i]) || empty.test(lines[i])) {
      continue;
    }
    if (i === 0) {
      errorMessage = getErrorMessage(lines[i]);
      continue;
    }

    stack.push(getError(lines[i], flag));
  }
  return {
    message: errorMessage,
    stack,
  };
}
