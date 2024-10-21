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
    if (isUuid(res ,userId)) {
        const userData = await isUserById(res ,userId)

        if(userData !== null){
            res.statusCode = 200;
            res.end(JSON.stringify(userData));
        }
    }
};

export const isUuid  = (res: ServerResponse, userId: string): boolean => {
    if (!/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(userId)) {
        res.statusCode = 400;
        res.end('not uuid');
        return false;
    }
    return true;
} 

export const isUserById = async (res: ServerResponse, userId: string): Promise<User | null> => {
    const file = await readFile('./src/api/users.json', { encoding: 'utf8' });
    const user = JSON.parse(file).dataUsers.find(
      (item: User) => item.id === userId,
    );
    console.log(user)
    if (!user) {
        res.statusCode = 400;
        res.end('User not found');
        return null;
    }

    return user;
}