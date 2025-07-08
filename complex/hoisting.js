// var Hoists with Initialization as undefined
console.log(a); // undefined
var a = 5;

// let Hoists Without Initialization
console.log(b); // ReferenceError
let b = 10;

// const Hoists Without Initialization
console.log(c); // ReferenceError
const c = 10;
