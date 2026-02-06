import http from 'http';
import fs from 'fs';
import path from 'path';

// create server
const server = http.createServer((req, res) => {

    if (req.url === '/') {

        fs.readFile('Style.css', 'utf-8', (err, csscontent) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            res.end(csscontent);
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
