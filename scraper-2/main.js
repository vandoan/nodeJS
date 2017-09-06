// https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm

var events = require('events') 					// Import events module
var eventEmitter = new events.EventEmitter(); 	// Create an eventEmitter object


var connectHandler = function connected() {		// event handler
	console.log('connections successful.');
	eventEmitter.emit('data_received'); 		// fire the data_recieved event
}

eventEmitter.on('connection', connectHandler); 	// bind the connection event with the handler
eventEmitter.on('data_recieved', function(){
	console.log('data received successfully.');
});
eventEmitter.emit(connection);					// Fire the connection event

console.log('Program ended.')

