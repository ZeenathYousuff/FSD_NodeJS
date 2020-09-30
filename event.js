const EventEmitter = require('events');
const emitter=new EventEmitter();
//event handler
emitter.addListener('messageLogged',function (){
    console.log('messageLogged Event occurred');
});
//creating and initializing an event named messageLogged
emitter.emit('messageLogged');
