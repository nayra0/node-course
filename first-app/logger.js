const EventEmitter = require('events');

var url = 'http:/mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        //Send and HTTP request
        console.log(message);

        // Raise an event
        this.emit('logging', {data: message});
    }
}



// module.exports.log = log;
// module.exports.endPoint = url;
module.exports = Logger;



