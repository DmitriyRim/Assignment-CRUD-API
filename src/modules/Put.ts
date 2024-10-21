import { ServerResponse } from 'node:http';
import { User, usersDB } from '../api/users';
import { hasFilds, isUserById, isUuid } from '../utils/utils';

/*
    PUT api/users/{userId} используется для обновления существующего пользователя
    Сервер должен ответить status code 200 и обновленная запись
    Сервер должен ответить кодом status code 400 и соответствующим сообщением, если userId запрос недействителен (не uuid)
    Сервер должен ответить кодом status code 404 и соответствующим сообщением, если запись с id === userId не существует
*/

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
