var router = require("./router.js");
var http = require('http');

http.createServer(function (request,response) {
	router.home(request, response);
	router.user(request, response);
}).listen(3000);

console.log('Server running at http://localhost:3000');

//Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string











