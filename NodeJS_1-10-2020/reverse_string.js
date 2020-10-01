const EventEmitter = require('events');
class ReverseString extends EventEmitter
{
    reverseString(str) {
        console.log("String is "+str);
        var revString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            revString += str[i];
        }
        console.log("Reverse string is "+revString);
        this.emit('stringReverse');
    }
}
module.exports=ReverseString;

