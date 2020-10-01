/*const EventEmitter = require('events');
const emitter = new EventEmitter();

const logger=require('./logger');
logger.log("Hiiii");
emitter.on('messageLogged',()=>{
    logger.logger('hello world');
});
console.log('event executed successfully');*/

/*********USING INHERTANCE************/

/*
const EventEmitter = require('events');
const Logger=require('./logger');
const logger=new Logger();
logger.log('calling log method from logger module');
logger.log1('calling log1 method from logger module');
logger.addListener('messageLogged',()=>{
    console.log('Handled messageLogged Event');
});
logger.addListener('messageLogged',()=>
{
    console.log('Handled messageLogged1 Event');
});
logger.log('=======END=======');*/

/*******************Reverse String********************/

const EventEmitter = require('events');
const ReverseString=require('./reverse_string');
const rev=new ReverseString();
rev.reverseString("WELCOME");
rev.addListener('stringReverse',()=> {
    console.log('Handled Reverse string Event');
});
console.log("END");