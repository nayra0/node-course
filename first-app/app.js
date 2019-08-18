/*jshint esversion: 6 */
// ############ Creating a function
// function sayHello(name){
//     console.log('Hello ' + name);
// }
// sayHello('Nayra');

// ############ Global object
// var message = '';
// global.console.log(global.message);

// console.log(module);

// ############ Creating a module
// const log = require('./logger');
// log('message');

// ############ Path module
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// ############ OS module
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('Total Memory: ' + totalMemory);

// ############ Template String
// ES6 / ES2015 : ECMAScript 6
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);

// ############ FS module / Async and Sync methods
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
// fs.readdir('%', function(err, files){
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// ############ Register a listener
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });
// ############ Raise an event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});

// Using eventEmitter between modules
// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('logging', (arg) => {
//     console.log('Listener Logging called', arg);
// });
// logger.log("Olá Nayra");

const http = require('http');

// // const server = http.createServer();

// // server.on('connection', (socket) => {
// //     console.log('New connection'); 
// // })

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

});


server.listen(3000);

console.log('Listening on port 3000...');