const EventEmitter = require('events');
const emitter=new EventEmitter();
//event handler

emitter.addListener('messageLogged',function (){
    console.log('messageLogged Event occurred');
});
//creating and initializing an event named messageLogged
emitter.emit('messageLogged');

//using addListener is old, so replaced with on , same as addListener
emitter.on("addTwonumbers",(x,y)=>{

    let res = x+y;
    console.log(`Sum of ${x} and ${y} is ${res}`);

});

emitter.emit('addTwonumbers',2,3);

emitter.on('logMessage',(args1,args2)=>{
    console.log(args1);
    console.log(args2);
})

emitter.emit('addTwoNumbers',100,200);
emitter.emit('logMessage',{id:1,name:'John Doe'},{id:2,name:'Marry Public'})
