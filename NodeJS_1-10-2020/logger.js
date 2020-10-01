const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message){
    console.log("called");
    emitter.emit("messageLogged");
}

module.exports.log=log;
