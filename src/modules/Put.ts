import { ServerResponse } from 'node:http';
import { User, usersDB } from '../api/users';
import { hasFilds, isUserById, isUuid } from '../utils/utils';

export const updateUser = (res: ServerResponse, userId: string, data: User) => {
  if ((isUuid(res, userId) && isUserById(res, userId), hasFilds(res, data))) {
    const userIndex = usersDB.findIndex((item) => item.id === userId);

    usersDB[userIndex] = {
      ...data,
      id: userId,
    };
    res.statusCode = 200;
    res.end();
  }
};
