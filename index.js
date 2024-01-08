// Package imports
const fs = require("fs");
const http = require("http");

// ------------------------------
// -- FILE READ AND WRITE

// # Blocking, synchronous way

// const textRead = fs.readFileSync("./text/someText.txt", "utf-8");

// const textOut = `This is what we know about avacados: ${textRead}. \n Created at ${Date.now()}`;

// fs.writeFileSync("./text/output.txt", textOut);

// console.log(textRead);
// console.log("File written!");

// # Non-blocking, asynchronous way

// fs.readFile("./text/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./text/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./text/someText.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./text/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your final file written 🎉");
//       });
//     });
//   });
// });

// console.log("gonna work first");

// -------------------------------
// -- SERVER

const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

const port = 8000;

server.listen(port, () => {
  console.log(`Listening the request on port ${port}`);
});
