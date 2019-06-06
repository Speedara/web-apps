const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><a href="#">Hello World\nCode, learn and practice every day.</a></body></html>');
});

server.listen(4000, "127.20.20.1");
