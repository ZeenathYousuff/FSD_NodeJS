const fs = require('fs');
let file_detailsSync=fs.readdirSync('./');
console.log(file_detailsSync);
let file_detailsAsync=fs.readdir('./',function (){
    console.log('within call back');
});
let file_detailsAsync=fs.readdir('./',function (){
    console.log('within call back');
});
console.log(file_detailsAsync);