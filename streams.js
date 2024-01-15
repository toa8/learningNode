const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // - Solution #1
  /*
    fs.readFile("test-file.txt", (err, data) => {
      if (err) console.error(err);
      res.end(data);
    });
  */
  // - Solotion #2 : streams
  /*
    const readable = fs.createReadStream("tests-file.txt");
    readable.on("data", (chunk) => {
      res.write(chunk);
    });
    readable.on("end", () => {
      res.end();
    });
    readable.on("error", (err) => {
      console.error(err);
      res.statusCode = 500;
      res.end("File not Found");
    });
  */
  // - Solution #3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

server.listen(8000, () => {
  console.log("Server listening at port 8000");
});
