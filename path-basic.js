const path = require("path");

console.log("Current file info \n");
console.log(`Filename`, __filename);
console.log(`Directory`, __dirname);

console.log("-".repeat(50));

const filePath = `/fajlarabby/documents/nextLevel.pdf`;

console.log(`analyzing path: ${filePath} \n`);
console.log("Directory", path.dirname(filePath));
console.log("Base name", path.basename(__filename));
console.log("Base name", path.basename(filePath));
console.log("file extension", path.extname(filePath));
console.log("file name", path.basename(filePath, path.extname(filePath)));

console.log("-".repeat(50));

const parsed = path.parse(filePath);
console.log("Parsed path object:", parsed);
console.log(`formated path:`, path.format(parsed));
