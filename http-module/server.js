const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello NodeJs from HTTP Module'); 
});

const port = 5000;
server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
