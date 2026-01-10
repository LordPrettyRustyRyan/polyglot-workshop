import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>This is Imagine</h1><p>Lets pave the way to rock the world!</p>`);
    }

    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>About Imagine</h1><p>Hey this is about Imagine!</p>`);
    }

    else if (req.url === '/new') {
        res.writeHead(200, { "Content-Type": "text/html" });

        const filePath = path.join(__dirname, "new.html");

        const data = fs.readFileSync(filePath, "utf-8");

        res.end(data);
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`<h1>404 Not Found</h1><p>This page was not found on this server</p>`);
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});
