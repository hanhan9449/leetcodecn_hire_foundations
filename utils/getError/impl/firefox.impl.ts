import { LK_Error } from '../../../interfaces/error-message.interface';
import { reverseString } from '../../reverseString';

export function firefoxImpl(s: string): LK_Error {
  s = reverseString(s.trim().replace(/ +/, ' '));
  const re = /(\d+):(\d+):([^@]+)/;
  let [column, line, filename] = s.match(re).slice(1, 4).map(reverseString);

  return {
    line: parseInt(line),
    column: parseInt(column),
    filename,
  };
}
