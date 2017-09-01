// console.log("Hello World");
// console.error("Oh noesss!");
// console.dir({name: "Pika", age: 33});

// node in terminal -> rep: read, evaluate, print
// native objects: string, array, date, math
// host objects: provided by the environment: window, document, history, xmlHttpRequest
// nonblocking
// blocking languages

// require https module
const profile = require('./profile');

const users = ['chalkersr', 'alenaholligan','vandoan'];

// user.forEach(username => {
// 	getProfile(username);
// });

users.forEach(profile.get);


// add the users names after the command for the arguments
// const users = process.argv.slice(2)
// users.forEach(getProfile);


