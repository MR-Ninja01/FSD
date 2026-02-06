import http from 'http';
import fs from 'fs';
import path from 'path';

// create server
const server = http.createServer((req, res) => {

    if (req.url === '/') {

        fs.readFile('index.html', 'utf-8', (err, htmlContent) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(htmlContent);
        });

    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found');
    }
});

// listen on port
server.listen(3000, () => {
    console.log('✅ Server running at http://localhost:3000');
});
