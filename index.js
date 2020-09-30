const os = require('os');
let release=os.release();
let platform=os.platform();
let arc=os.arch();
let hostName=os.hostname();
let freeMem=os.freemem();
let homeDir=os.homedir()
let networkInterfaces=os.networkInterfaces();
let version=os.version();
let type=os.type();
let time=os.uptime();

console.log(`${release} ${platform} ${arc} ${hostName}`);
console.log(`${freeMem} ${homeDir} ${networkInterfaces} ${version} ${type} ${time}`);

