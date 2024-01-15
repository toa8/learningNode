/*
In JavaScript, an event emitter is a class that allows an object to send events to other objects.
An event is a state or operation of an object that it wants other objects to hear about.

Event emitters are used in JavaScript to facilitate communication between objects.
For example, when a user clicks a button, an application using an event 
emitter can notify other objects of this event.
This allows other objects to process the button click event and respond accordingly.
*/

const events = require("events");
const http = require("http");

// - 101

// const eventEmitter = new events.EventEmitter();

// eventEmitter.on("Hello World", () => {
//   console.log("Hello World");
// });

// eventEmitter.emit("Hello World");

// # give parameters to callback func

// eventEmitter.on("onSale", (stock) => {
//   console.log(`There are now ${stock} items left in the stock`);
// });

// eventEmitter.emit("onSale", 9);

// - BEST PRACTICE TO USE

class Sales extends events {
  constructor() {
    super();
  }
}

const eventEmitter = new Sales();

eventEmitter.on("Hey", (name) => {
  console.log(`Hey ${name}!`);
});

eventEmitter.emit("Hey", "Talha");

// ------------------------------------------------------------

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received!");
  res.end("Request Received!");
});

server.on("request", (req, res) => {
  console.log("Second Request Received!");
});

server.close("close", (req, res) => {
  console.log("Server Closed!");
});

server.listen(8000, () => {
  console.log("Waiting for events");
});
