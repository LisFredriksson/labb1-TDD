import { isLowerCase } from './lowercase';

describe('header.ts tests', () => {
  it('should return true if only lowercase', () => {
    const actualResult = isLowerCase("hello");
    expect(actualResult).toBe(true);
  });
  it('should return false if not only lowercase', () => {
    const actualResult = isLowerCase("Hello");
    expect(actualResult).toBe(false);
  });
});
