// Package imports
const fs = require("fs");
const http = require("http");
const url = require("url");

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

const productData = fs.readFileSync(`${__dirname}/devData/data.json`, "utf-8");
const productDataObj = JSON.parse(productData);

const server = http.createServer((req, res) => {
  console.log(req.url); // this is how we get url user entered...

  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW PAGE!");
  } else if (pathName === "/product") {
    res.end("This is PRODUCT PAGE!");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(productData);
  } else {
    res.writeHead(404, {
      "Content-type": "text-html",
      "my-own-header": "hello this is my own message!",
    });
    res.end("<h1>Page Not FOUND!</h1>");
  }
});

const port = 8000;

server.listen(port, () => {
  console.log(`Listening the request on port ${port}`);
});
