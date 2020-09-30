const os = require('os');
let release=os.release();
let platform=os.platform();
let arc=os.arch();
let hostName=os.hostname();
let freeMem=os.freemem();
let homeDir=os.homedir()
let networkInterfaces=os.networkInterfaces();

console.log(`${release} ${platform} ${arc} ${hostName}`);
console.log(`${freeMem} ${homeDir} ${networkInterfaces}`);

