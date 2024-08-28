const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

const accessKey = process.env.ACCESS_KEY;
const secretKey = process.env.SECRET_KEY;

// console.log(`Access Key: ${accessKey}`);
// console.log(`Secret Key: ${secretKey}`);

export { accessKey, secretKey };
