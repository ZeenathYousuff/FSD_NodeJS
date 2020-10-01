/*const EventEmitter = require('events');
const emitter = new EventEmitter();

function log(message){
    console.log("called");
    emitter.emit("messageLogged");
}

module.exports.log=log;*/

/**********************USING INHERITANCE**************/

const EventEmitter = require('events');
class Logger extends EventEmitter
{
    log(message) {
        console.log(message)
        this.emit('messageLogged');
    }
    log1(message)
    {
        console.log(message);
        this.emit('messageLogged1');
    }

}

module.exports=Logger;
