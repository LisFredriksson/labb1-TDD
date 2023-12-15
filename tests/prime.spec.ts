import { isPrime } from './prime';

describe('prime.ts tests', () => {
  it('should return false if not a prime number', () => {
    const actualResult = isPrime(1);
    expect(actualResult).toBe(false);
  });
  it('should return true if prime number', () => {
    const actualResult = isPrime(47);
    expect(actualResult).toBe(true);
  });
});
