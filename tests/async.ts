export function getUsers() {
    return new Promise((resolve) => {
      const users = [
        { name: "Lis", group: 1 },
        { name: "Robin", group: 2 },
        { name: "Leah", group: 2 },
        { name: "Alba", group: 3 },
        { name: "Jens", group: 1 },
        { name: "Jonatan", group: 3 },
      ];
      resolve(users);
    });
  }

  export function getGroups() {
    return new Promise((resolve) => {
      const groups = [
        { id: 1, groupName: "Knatte" },
        { id: 2, groupName: "Fnatte" },
        { id: 3, groupName: "Tjatte" },
      ];

      resolve(groups);
    });
  }
