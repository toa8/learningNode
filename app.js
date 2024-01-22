// Modules
const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");

const app = express();

// Middlewares
/*
 we used the middleware downhere cause we need to
 allow our post request to get that body information...
*/
app.use(morgan("dev"));
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from the middleware!!");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/api/v1/tours", tourRouter);

module.exports = app;
