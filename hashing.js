const crypto = require("crypto");

// ! Not recomended
// md5
const md5Hash = crypto.createHash("md5").update("password123").digest("hex");
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex");
console.log("Input: password123");
console.log("MD5 HashedPassword:", md5Hash);
console.log("MD5 HashedPassword2:", md5Hash2);

// sha256
const sha256Hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");
console.log("Input: password123");
console.log("SHA256 HashedPassword:", sha256Hash);

// sha512
const sha512Hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");
console.log("Input: password123");
console.log("SHA512 HashedPassword:", sha512Hash);
