import { ServerResponse } from 'node:http';
import { randomUUID } from 'node:crypto';
import { User, usersDB } from '../api/users';

export const setUser = (res: ServerResponse, data: User) => {
  const keys = ['username', 'age', 'hobbies'];

  if (keys.every((key) => key in data)) {
    const id = randomUUID();
    const newUser = { ...data, id };
    usersDB.push({ ...data, id });
    res.statusCode = 201;
    res.end(JSON.stringify(newUser));
  } else {
    res.statusCode = 400;
    res.end('There are no required fields');
  }
};
