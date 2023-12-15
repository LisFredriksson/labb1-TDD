import { makeHeading } from './header';

describe('header.ts tests', () => {
  it('should return a H1 tag with the text "Hello" in it', () => {
    const actualResult = makeHeading(1, "Hello");
    expect(actualResult).toContain('<h1>Hello</h1>');
  });
  it('should return a H2 tag with the text "Next level" in it', () => {
    const actualResult = makeHeading(2, "Next level");
    expect(actualResult).toContain('<h2>Next level</h2>');
  });
});
