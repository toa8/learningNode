// What is the Event Loop?
/*
# The event loop is what allows Node.js to perform non-blocking I/O operations — despite the 
fact that JavaScript is single-threaded — by offloading 
operations to the system kernel whenever possible.
# The purpose of the event loop is to allow the application to continuously listen and process events to 
provide a fast and efficient response to the user. 
This way,the application can perform other operations and work more 
efficiently instead of waiting during I/O operations.
*/

const fs = require("fs");
const cyrpto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1; // changing thread pool-size( actual capacity = 4 )

setTimeout(() => {
  console.log("timer 1 finished");
}, 0);
setImmediate(() => {
  console.log("timer immediate finished");
});

fs.readFile("./test-file.txt", () => {
  console.log("I/O finished");
  console.log("----------");

  setTimeout(() => {
    console.log("timer 2 finished");
  }, 0);
  setTimeout(() => {
    console.log("timer 3 finished");
  }, 3000);
  setImmediate(() => {
    console.log("timer immediate  finished");
  });

  process.nextTick(() => console.log("Process.nextTick executed!"));

  cyrpto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });
  cyrpto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });
  cyrpto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });
  cyrpto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted!");
  });

  // making this encrypt stuff thread-pools not event-loop
  // when i change the thread-pool size to 1, other steps wait to get execute the first entered.
  // when tread-pool-size = 1, program executes like this..
  /*
    hello from the top-level code
    timer 1 finished
    timer immediate finished  
    I/O finished
    ----------
    Process.nextTick executed!
    timer immediate  finished
    timer 2 finished
    2013 Password encrypted!
    timer 3 finished
    3940 Password encrypted!
    4045 Password encrypted!
    4092 Password encrypted!
  */
});

console.log("hello from the top-level code"); // execute first cause top-level code...
