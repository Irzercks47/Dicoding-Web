const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    const { url, method } = request;

    if(url === '/') {
        if(method === 'GET') {
            response.end("<h1>Ini adalah homepage</h1>");
        } else{
            response.end("<h1>Halaman tidak dapat diakses dengan <any> request</h1>")
        }
        // curl -X <any> http://localhost:5000/
    }

    if(url === '/about') {
        if(method === 'GET') {
            response.end("<h1>Halo! Ini adalah halaman about</h1>");
            // curl -X GET http://localhost:5000/about
        }
        if(method === 'POST') {
            let body = [];

            request.on('data', (chunk) => {
                body.push(chunk);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body)
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
            // curl -X POST http://localhost:5000/about
        }else{
                response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
        // curl -X <any> http://localhost:5000/about
    }else{
        response.end("<h1>Halaman tidak ditemukan!</h1>")
    }
    // curl -X <any> http://localhost:5000/<any>
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});