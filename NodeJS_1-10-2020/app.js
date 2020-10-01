const EventEmitter = require('events');
const emitter = new EventEmitter();

const logger=require('./logger');
logger.logger("Hi");
emitter.on('messageLogged',()=>{
    logger.logger('hello world');
});
console.log('event executed successfully');


