const http = require('http');

let counter = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/count') {
    counter++;
    res.end(`Visit count: ${counter}`);
  } else {
    res.end('Hello from Node multi-stage app!');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
