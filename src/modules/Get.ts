import { ServerResponse } from 'node:http';
import { User, usersDB } from '../api/users';

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

export const isUuid = (res: ServerResponse, userId: string): boolean => {
  if (
    !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
      userId,
    )
  ) {
    res.statusCode = 400;
    res.end('not uuid');
    return false;
  }
  return true;
};

export const isUserById = (
  res: ServerResponse,
  userId: string,
): User | null => {
  const user = usersDB.find((item: User) => item.id === userId);

  if (!user) {
    res.statusCode = 400;
    res.end('User not found');
    return null;
  }

  return user;
};
