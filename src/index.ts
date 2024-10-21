import { createServer } from 'node:http';
import { getUserById, getUsersAll } from './modules/Get';
import { setUser } from './modules/Post';
import { updateUser } from './modules/Put';
import { removeUser } from './modules/Delete';
import 'dotenv/config';

const PORT = process.env.PORT || 8000;

const server = createServer((req, res) => {
  let url;
  let id = '';
  const body: Buffer[] = [];

  if (req.url?.startsWith('/api/users/')) {
    url = '/api/users/';
    id = req.url.slice(url.length);
  } else {
    url = req.url;
  }

  server.on('error', () => {
    res.statusCode = 500;
    res.end('500');
  });

  // this.emit('error', new Error("Error!!!"));
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      const data = Buffer.concat(body).toString();
      switch (url) {
        case '/api/users':
          if (req.method === 'POST') {
            setUser(res, JSON.parse(data));
          }
          break;
        case '/api/users/':
          if (req.method === 'PUT') {
            updateUser(res, id, JSON.parse(data));
          }
          break;
        default:
          res.statusCode = 404;
          res.end('404');
          break;
      }
    });

  switch (url) {
    case '/api/users':
      if (req.method === 'GET') {
        getUsersAll(res);
      }
      break;
    case '/api/users/':
      if (req.method === 'GET') {
        getUserById(res, id);
      }
      if (req.method === 'DELETE') {
        removeUser(res, id);
      }
      break;
    default:
      res.statusCode = 404;
      res.end('404');
      break;
  }
});

server.listen(Number(PORT), '127.0.0.1', () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});
