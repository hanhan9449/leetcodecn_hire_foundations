import { getBrowserFlag } from './getBrowserFlag';
import { BrowserEnum } from '../enums/Browser.enum';

describe('test getBrowserFlag function', () => {
  it('should return CHROME', () => {
    const input = `TypeError: Error raised
  at bar http://192.168.31.8:8000/c.js:2:9
  at foo http://192.168.31.8:8000/b.js:4:15
  at calc http://192.168.31.8:8000/a.js:4:3
  at <anonymous>:1:11
  at http://192.168.31.8:8000/a.js:22:3
`;

    expect(getBrowserFlag(input)).toBe(BrowserEnum.CHROME);
  });

  it('should return FIREFOX', () => {
    const input = `
  bar@http://192.168.31.8:8000/c.js:2:9
  foo@http://192.168.31.8:8000/b.js:4:15
  calc@http://192.168.31.8:8000/a.js:4:3
  <anonymous>:1:11
  http://192.168.31.8:8000/a.js:22:3
`;

    expect(getBrowserFlag(input)).toBe(BrowserEnum.FIREFOX);
  });
});
