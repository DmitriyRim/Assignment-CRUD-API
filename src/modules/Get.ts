import { ServerResponse } from 'node:http';
import { readFile } from 'node:fs/promises';

type User = {
  id: string;
  username: string;
  age: number;
  hobbies: string[];
};

export const getUsersAll = async (res: ServerResponse) => {
  const file = await readFile('./src/api/users.json');
  res.statusCode = 200;
  res.end(file);
};

export const getUserById = async (res: ServerResponse, userId: string) => {
    let response;
    if (isUuid(res ,userId)) {
        const file = await readFile('./src/api/users.json', { encoding: 'utf8' });
        const userData = JSON.parse(file).dataUsers.find(
          (item: User) => item.id === userId,
        );

        if(userData){
            response = JSON.stringify(userData);
            res.statusCode = 200;
        } else {
            res.statusCode = 404;
            response = 'User not found';
        }
    }

  res.end(response);
};

export const isUuid  = (res: ServerResponse, id: string): boolean => {
    if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
        res.statusCode = 400;
        res.end('not uuid');
        return false;
    }
    return true;
} 
