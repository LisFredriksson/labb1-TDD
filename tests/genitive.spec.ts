import { formatName } from './genitive';

describe('genitive.ts tests', () => {
  it('should return the name in genitive', () => {
    const actualResult = formatName("Jonatan");
    expect(actualResult).toMatch('Jonatans');
  });
  it('should return the name in genitive', () => {
    const actualResult = formatName("Lis");
    expect(actualResult).toMatch('Lis');
  });
});
