import { getErrorMessage } from './getErrorMessage';

describe('test getErrorMessage', () => {
  it('should return error message', function () {
    const input = 'TypeError: Error raised';
    const output = 'Error raised';
    expect(getErrorMessage(input)).toBe(output);
  });
  it('should return ""', () => {
    const input = '';
    const output = '';
    expect(getErrorMessage(input)).toBe(output);
  });
});
