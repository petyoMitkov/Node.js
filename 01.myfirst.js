//node 01.myfirst.js
//Runs on http://localhost:8080

let http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World from Node.js');
}).listen(8080);
