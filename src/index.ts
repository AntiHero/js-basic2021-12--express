import { resolve } from 'node:path';
import http from 'node:http';
import fs from 'node:fs';

const index = fs.readFileSync(resolve(__dirname, '../public/index.html'));
const style = fs.readFileSync(resolve(__dirname, '../public/style.css'));

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/html');
    res.write(index);
    res.end();
  } else if (req.url === '/style.css') {
    res.setHeader('content-type', 'text/css');
    res.write(style);
    res.end();
  } else {
    res.write('Not found!');
    res.end();
  }
});

const PORT = 9090;

server.listen(PORT, () => {
  console.log('Server is listening at http://localhost:%s', PORT);
});
