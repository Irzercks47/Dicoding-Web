const http = require('http');

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');

//     response.statusCode = 200;
//     response.end('<h1>Halo HTTP Server!</h1>');
// };

// const requestListener = (request, response) => {
//     response.setHeader('Content-Type', 'text/html');
//     response.statusCode = 200;
//     const { method } = request;
//     if(method === 'GET') {
//         response.end('<h1>Hello!</h1>');
//     }
//     if(method === 'POST') {
//         let body = [];

//         request.on('data', (chunk) => {
//             body.push(chunk);
//         });

//         request.on('end', () => {
//             body = Buffer.concat(body).toString();
//             const { name } = JSON.parse(body)
//             response.end(`<h1>Hai! ${name}</h1>`);
//         });
//     }
//     // Anda bisa mengevaluasi tipe method lainnya
// };

const requestListener = (request, response) => {
    const { url, method } = request;

    if(url === '/') {
        if(method === 'GET') {
            // curl -X GET http://localhost:5000/
        }
        // curl -X <any> http://localhost:5000/
    }

    if(url === '/about') {
        if(method === 'GET') {
            // curl -X GET http://localhost:5000/about
        }
        if(method === 'POST') {
            // curl -X POST http://localhost:5000/about
        }
        // curl -X <any> http://localhost:5000/about
    }
    // curl -X <any> http://localhost:5000/<any>
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});