const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === '/home' ) res.end('welcome to home page');
    else res.end("hello world");
});

server.listen(3000, () => {
    console.log('server is running on port no 3000');
})
