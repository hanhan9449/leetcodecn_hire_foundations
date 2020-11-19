import { LK_Error } from '../../../interfaces/error-message.interface';
import { firefoxImpl } from './firefox.impl';

describe('test firefox impl of getError', () => {
  it('should return Error object', () => {
    const input = `  bar@http://192.168.31.8:8000/c.js:2:9`;
    const output: LK_Error = {
      line: 2,
      column: 9,
      filename: 'http://192.168.31.8:8000/c.js',
    };
    expect(firefoxImpl(input)).toEqual(output);
  });
  it('should return Error object', () => {
    const input = `  http://192.168.31.8:8000/c.js:2:9`;
    const output: LK_Error = {
      line: 2,
      column: 9,
      filename: 'http://192.168.31.8:8000/c.js',
    };
    expect(firefoxImpl(input)).toEqual(output);
  });
});
