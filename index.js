
const fs = require('fs');
fs.readdir('......../', (err,data)=> {
    if (err)
        console.log('error occurred');
    else
        console.log(data);
});