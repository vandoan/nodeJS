var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendfile('index.html');
});

var clients = 0;

// Whenever someone connects, execute below
io.on('connection', function(socket){
	clients++;
	socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
	//socket.broadcast.emit('newclientconnect', {description: clients + ' clients connected.'});
	//io.sockets.emit('broadcast', { description: clients + ' clients connected'});
	// socket.on('disconnect', function() {
	// 	clients--;
	// 	io.sockets.emit('broadcast', { description: clients + ' are connected.'});
	// });
	//	console.log('A user connected');

	// Send a message after 4 seconds
	// setTimeout(function(){
	// 	socket.emit('testerEvent', { description: 'custom event'});
	// 	// socket.send('Send a message 4 seconds after connection.') 
	// }, 4000);

	// Whenever someone disconnects, execute below
	// socket.on('disconnect', function(){
	// 	console.log('A user disconnected');
	// });

	// socket.on('clientEvent',function(data){
	// 	console.log(data);
	// });

	var nsp = io.of('/my-namespace');
	nsp.on('connection', function(socket){
		console.log('someone connected');
		nsp.emit('hi', 'Hi, everyone.');
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
