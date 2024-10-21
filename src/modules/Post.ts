import { ServerResponse } from 'node:http';
import { randomUUID } from 'node:crypto';
import { User, usersDB } from '../api/users';
import { hasFilds } from '../utils/utils';

export const setUser = (res: ServerResponse, data: User) => {
  if (hasFilds(res, data)) {
    const id = randomUUID();
    const newUser = { ...data, id };
    usersDB.push({ ...data, id });
    res.statusCode = 201;
    res.end(JSON.stringify(newUser));
  }
};
