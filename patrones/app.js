let  greet  =  require('./greet1');
let greet2a = require('./greet2').greet;
const greet3 = require('./greet3');
let greet3 = require ('./greet3');
greet();
greet2a.greet();

greet3.greet();
greet3.greeting = "Hello from App";

let greet3b = require('./greet3');

greet3b.greet();

const Greet4 = require ('./greet4');
let myGreet = new (Greet4);
myGreet.greet();

const greet5 = require('./greet5');
greet5.greet();