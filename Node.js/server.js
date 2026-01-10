import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');

    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.end("<h1> Hello from Node HTTP Server! </h1>");

    console.log(req.url)

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1> This is Imagine</h1> <p> Lets pave the way to rock the world!</p>');
    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1> About Imagine</h1> <p> Hey this is about Imagine!</p>');
    }
    else if (req.url === '/new') {
        res.statusCode = 200;
        const data = fs.readFileSync('./new.html')
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1> 404 Not Found</h1> <p> This page was not found on this server</p>');
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});