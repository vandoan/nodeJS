var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendfile('index.html');
});

// var clients = 0;
// var roomno = 1;

// Whenever someone connects, execute below
users = [];
io.on('connection', function(socket){
	console.log('A user has connected');
	socket.on('setUsername', function(data){
		console.log(data);
		if(users.indexOf(data) > -1){
			socket.emit('userExists', data + ' username is taken. Try another.');
		} else {
			users.push(data);
			socket.emit('userSet', {username: data});
		}
	});
	socket.on('msg', function(data){
		// Send message to everyone
		io.sockets.emit('newmsg', data);
	});



	// Increase roomno 2 clients are present in a room
  // if(io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1){
		// roomno++;
  // }
		// socket.join('room-'+roomno);
		// io.sockets.in('room-'+roomno).emit('connectToRoom', 'You are in room no. ' + roomno);

		// Send this event to everyone in the room.
	//socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
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

	// var nsp = io.on'/my-namespace');
	// nsp.on('connection', function(socket){
	// 	console.log('someone connected');
	// 	nsp.emit('hi', 'Hi, everyone.');
	// });
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
