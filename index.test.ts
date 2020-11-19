import { solve, sum } from './index';
import { LK_ErrorMessage } from './interfaces/error-message.interface';

test('sum', () => {
  expect(sum(1, 1)).toBe(2);
});

describe('test convert function', () => {
  test('should work', () => {
    const input = `TypeError: Error raised
  at bar http://192.168.31.8:8000/c.js:2:9`;
    const output: LK_ErrorMessage = {
      message: 'Error raised',
      stack: [
        {
          line: 2,
          column: 9,
          filename: 'http://192.168.31.8:8000/c.js',
        },
      ],
    };
    expect(solve(input)).toEqual(output);
  });
  test('chrome work', () => {
    const input = `TypeError: Error raised
  at bar http://192.168.31.8:8000/c.js:2:9
  at foo http://192.168.31.8:8000/b.js:4:15
  at calc http://192.168.31.8:8000/a.js:4:3
  at <anonymous>:1:11
  at http://192.168.31.8:8000/a.js:22:3
`;
    const output: LK_ErrorMessage = {
      message: 'Error raised',
      stack: [
        {
          line: 2,
          column: 9,
          filename: 'http://192.168.31.8:8000/c.js',
        },
        {
          line: 4,
          column: 15,
          filename: 'http://192.168.31.8:8000/b.js',
        },
        {
          line: 4,
          column: 3,
          filename: 'http://192.168.31.8:8000/a.js',
        },
        {
          line: 22,
          column: 3,
          filename: 'http://192.168.31.8:8000/a.js',
        },
      ],
    };
    const res = solve(input);
    expect(res).toEqual(output);
  });
  test('firefox work', () => {
    const input = `
  bar@http://192.168.31.8:8000/c.js:2:9
  foo@http://192.168.31.8:8000/b.js:4:15
  calc@http://192.168.31.8:8000/a.js:4:3
  <anonymous>:1:11
  http://192.168.31.8:8000/a.js:22:3
`;
    const output: LK_ErrorMessage = {
      message: '',
      stack: [
        {
          line: 2,
          column: 9,
          filename: 'http://192.168.31.8:8000/c.js',
        },
        {
          line: 4,
          column: 15,
          filename: 'http://192.168.31.8:8000/b.js',
        },
        {
          line: 4,
          column: 3,
          filename: 'http://192.168.31.8:8000/a.js',
        },
        {
          line: 22,
          column: 3,
          filename: 'http://192.168.31.8:8000/a.js',
        },
      ],
    };
    const res = solve(input);
    expect(res).toEqual(output);
  });
});
