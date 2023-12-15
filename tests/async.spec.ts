import { getGroups, getUsers } from "./async";

describe('async.ts tests', () => {
  it('should return an array of users', async () => {
    const actualResult = await getUsers();
    const expectedUsers = [
        { name: "Lis", group: 1 },
        { name: "Robin", group: 2 },
        { name: "Leah", group: 2 },
        { name: "Alba", group: 3 },
        { name: "Jens", group: 1 },
        { name: "Jonatan", group: 3 },
    ];
    expect(actualResult).toEqual(expectedUsers);
  });
  it('should return an array of groups', async () => {
    const actualResult = await getGroups();
    const expectedUsers = [
        { id: 1, groupName: "Knatte" },
        { id: 2, groupName: "Fnatte" },
        { id: 3, groupName: "Tjatte" },
    ];
    expect(actualResult).toEqual(expectedUsers);
  });
});
