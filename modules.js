// console.log(arguments);
// console.log(require("module").wrapper);

// # module.exports
const Calculator = require("./modules/test-module-1");
const calc1 = new Calculator();
console.log(calc1.add(5, 5));

// # exports
// const calc2 = require("./test-module-2");
const { add, multiply, devide } = require("./modules/test-module-2");
console.log(multiply(10, 12));

// # caching
require("./modules/test-module-3")();
require("./modules/test-module-3")();
require("./modules/test-module-3")();

/*
output console:
Hello from the module
Log this!!
Log this!!
Log this!!
*/
