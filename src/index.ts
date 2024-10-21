import { createServer } from 'node:http';
import { getUserById, getUsersAll } from './modules/Get';

const server = createServer((req, res) => {
  let url;
  let id = '';

  if (req.url?.startsWith('/api/users/')) {
    url = '/api/users/';
    id = req.url.slice(url.length);
  } else {
    url = req.url;
  }

  switch (url) {
    case '/api/users':
      getUsersAll(res);
      break;
    case '/api/users/':
      getUserById(res, id);
      break;
    default:
      res.end('404');
      break;
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
