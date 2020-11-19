import { LK_Error } from '../../../interfaces/error-message.interface';
import { chromeImpl } from './chrome.impl';

describe('test chrome impl of getError', () => {
  it('should return a Error object', () => {
    const input = `  at bar http://192.168.31.8:8000/c.js:2:9`;
    const output: LK_Error = {
      line: 2,
      column: 9,
      filename: 'http://192.168.31.8:8000/c.js',
    };
    expect(chromeImpl(input)).toEqual(output);
  });
  it('should return a Error object', () => {
    const input = `  at foo http://192.168.31.8:8000/b.js:4:15`;
    const output: LK_Error = {
      line: 4,
      column: 15,
      filename: 'http://192.168.31.8:8000/b.js',
    };
    expect(chromeImpl(input)).toEqual(output);
  });
  it('should return a Error object', () => {
    const input = `  at http://192.168.31.8:8000/a.js:4:3`;
    const output: LK_Error = {
      line: 4,
      column: 3,
      filename: 'http://192.168.31.8:8000/a.js',
    };
    expect(chromeImpl(input)).toEqual(output);
  });
});
