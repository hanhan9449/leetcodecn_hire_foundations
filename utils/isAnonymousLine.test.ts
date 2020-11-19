import { isAnonymousLine } from './isAnonymousLine';

describe('isAnonymousLine should work', () => {
  it('should return true', () => {
    const input = ` <anonymous>:1:11`;
    expect(isAnonymousLine(input)).toBeTruthy();
  });
  it('should return false', () => {
    const input = ` calc@http://192.168.31.8:8000/a.js:4:3`;
    expect(isAnonymousLine(input)).toBeFalsy();
  });
});
