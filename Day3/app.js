const http = require('http');
require('dotenv').config();
const Port = process.env.PORT || 3000;

// Create server - callback fires on every request

// const server = http.createServer((req, res) => {

//     // write response body
//     resizeBy.write('<h1>Welcome to Node.js!</h1>');
//     resizeBy.write('<p>Your first HTTP server is running. </p>')

//     // end the response(required!)
//     res.end()
// });

// // start listening on port 3000
// server.listen(3000, () => {
//     console.log('Server running at http://localhost3000');
// })

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.writeHead(200, { 'Content-Type': 'text/html'})
//     res.write('<h1>Hello, world!</h1>');
//     res.write('<p>This is a simple HTTP server.</p>')
//     res.end();
// });

// server.listen(Port, () => {
//     console.log(`Server is running on port ${Port}`);
// });

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(`
            <h1 style='color:navy'>Hello from Node.js!<h1>
            <p> Built with pure Node.js http module.</p>
            `);
    } else {
        res.writeHead(404, { 'Conten-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Route not found'}));
    }
});

server.listen(3000, () => console.log('Running on :3000'));