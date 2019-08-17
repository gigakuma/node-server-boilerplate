import http from 'http';

const port = 8080;

http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
}).listen(port, () => {
    console.log(`✅  The server is running at http://localhost:${port}/`)
});