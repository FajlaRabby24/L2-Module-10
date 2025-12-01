const os = require("os");

console.log(`system info`);
console.log(`-`.repeat(50));

console.log("platform details: ");
console.log(`platform: `, os.platform());
console.log("Architecture: ", os.arch());
console.log("os type", os.type());
console.log("os release", os.release());
console.log("host name", os.hostname());

console.log(`-`.repeat(50));
console.log(`cpu info:`);
const cpus = os.cpus();
console.log("cpu model", cpus[0].model);
console.log("number of cores:", cpus.length);
console.log("cpu speed", cpus[0].speed);
console.log("cpu times", cpus[0].times);

console.log(`-`.repeat(50));
const totalmem = os.totalmem();
const freemem = os.freemem();
console.log("total memory", (totalmem / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("free memory", (freemem / 1024 / 1024 / 1024).toFixed(2), "GB");

console.log(`-`.repeat(50));
const upTime = os.uptime();

const days = Math.floor(upTime / 86400);
const hours = Math.floor((upTime % 86400) / 3600);
const minutes = Math.floor((upTime % 3600) / 60);

console.log(`${days} days ${hours} hours ${minutes} minutes`);
