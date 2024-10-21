export type User = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

export const usersDB: User[] = [
  {
    id: '2c9bd972-d63d-4b3e-b6b7-9a85bcd9cf0a',
    username: 'Masha',
    age: 24,
    hobbies: ['Run', 'Books'],
  },
  {
    username: 'Aleshke',
    age: 25,
    hobbies: ['Bike'],
    id: 'ae551807-339d-4cab-badb-e98215099f21',
  },
];
