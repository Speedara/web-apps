const http = require('http');
const lorem = require('./lorem');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    const posts = [
        lorem.getPost(),
        lorem.getPost(),
        lorem.getPost(),
        lorem.getPost(),
        lorem.getPost(),
        lorem.getPost(),
    ];

    res.end(JSON.stringify(posts));
});

server.listen(3001, '127.0.0.1');
