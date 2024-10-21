import { ServerResponse } from 'node:http';
import { isUserById, isUuid } from '../utils/utils';
import { usersDB } from '../api/users';
/*
Удалить api/users/{userId} используется для удаления существующего пользователя из базы данных
Сервер должен ответить кодом status code 204, если запись найдена и удалена
Сервер должен ответить кодом status code 400 и соответствующим сообщением, если userId запрос недействителен (не uuid)
Сервер должен ответить кодом status code 404 и соответствующим сообщением, если запись с id === userId не существует
*/

export const removeUser = (res: ServerResponse, userId: string) => {
  if (isUuid(res, userId) && isUserById(res, userId)) {
    const userIndex = usersDB.findIndex((item) => item.id === userId);

    usersDB.splice(userIndex, 1);
    res.statusCode = 204;
    res.end();
  }
};
