import { ServerResponse } from 'node:http';
import { usersDB } from '../api/users';
import { isUserById, isUuid } from '../utils/utils';

export const getUsersAll = (res: ServerResponse) => {
  res.statusCode = 200;
  res.end(JSON.stringify(usersDB));
};

export const getUserById = (res: ServerResponse, userId: string) => {
  if (isUuid(res, userId)) {
    const userData = isUserById(res, userId);

    if (userData !== null) {
      res.statusCode = 200;
      res.end(JSON.stringify(userData));
    }
  }
};
