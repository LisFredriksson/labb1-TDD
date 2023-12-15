import { getUsers } from './async';

const users = type {
    [
        { "name": "Erik",
        "group": 1 },
        { "name": "Lisa",
        "group": 2 },
        { "name": "Hampus",
        "group": 2 },
        { "name": "Linda",
        "group": 3 },
        { "name": "Eva",
        "group": 1 },
        { "name": "Anna",
        "group": 3 }
       ]
}

describe('header.ts tests', () => {
  it('should return a H1 tag with the text "Hello" in it', () => {
    const actualResult = getUsers(1, "Hello");
    expect(actualResult).toContain('<h1>Hello</h1>');
  });
  it('should return a H2 tag with the text "Next level" in it', () => {
    const actualResult = getUsers(2, "Next level");
    expect(actualResult).toContain('<h2>Next level</h2>');
  });
});
