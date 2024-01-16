const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the ServerSide!",
    app: "learningExpress",
  });
});

app.post("/", (req, res) => {
  res.send("Hey this is a post request!");
});

app.listen(port, () => {
  console.log(`App listening from port: ${port}`);
});
