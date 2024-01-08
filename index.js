const fs = require("fs");

const textRead = fs.readFileSync("./text/someText.txt", "utf-8");

const textOut = `This is what we know about avacados: ${textRead}. \n Created at ${Date.now()}`;

fs.writeFileSync("./text/output.txt", textOut);

console.log(textRead);
console.log("File written!");
