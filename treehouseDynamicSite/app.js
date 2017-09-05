


// Create web server
var http = require('http');
http.createServer(function (request,response) {
	homeRoute(request, response);
}).listen(3000);

console.log('Server running at http://localhost:3000');

// Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
	// if url == "/" && GET
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("Hello world");
}