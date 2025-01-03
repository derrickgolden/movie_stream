const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

server.listen(8080, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:8080/');
});

// ;; QUESTION SECTION:
// ;easytech.africa.               IN      A

// ;; ANSWER SECTION:
// easytech.africa.        0       IN      A       87.98.143.33
