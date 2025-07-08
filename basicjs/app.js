// const title = document.getElementById("container__heading");
// title.style.color = "red";
// console.log(`The title is `, title, `.`);

// const title = document.getElementsByTagName("h1");
// title.style.color = "red";
// console.log(title);

function addnumbers(a, b, c) {
  return a + b + c;
}
let m = addnumbers(1, 2, 3);
console.log(m);
console.log("This is me Pranisha");

let a = 55;
a = "We are friends";
console.log(a);
console.log(a);

a = null;
console.log(a);

m = this;
console.log(m);

// ALL DATATYPES

let n = 21;
let b = "Helo";
let c = true;
let d = BigInt(234) + BigInt(678);
let e = null;
let f = Symbol("I want to go");

console.log(n, b, c, d, e, f);
console.log(typeof d);

// OBJECTS
console.log("OBJECTS");
const item = {
  Harry: true,
  Anmol: false,
  Rohan: undefined,
  Pranisha: 7,
};

console.log(item["Pranisha"]);

const object = {
  name: "Harry",
  grade: 1,
  isTeacher: false,
};

object["friend"] = "Jack";
object["teacher"] = "Rijen";

console.log(object);
console.log(object["friend"]);

let z = 0;
console.log("z++=", z++);
0;
console.log("++z=", ++z);
2;
console.log("--z=", --z);
1;
console.log("z--=", z--);
1;

// PROMPT
// const h = prompt("Make your wish");
// console.log(typeof h);

// // alert("hello");

// s = Number.parseInt(h);
// if (s > 0) {
//   alert("OK");
// } else {
//   alert("NOT OK");
// }

// const ques = prompt("What's your age?");
// ans = Number.parseInt(ques);

// if (ans >= 10 && ans <= 20) {
//   alert("Yes");
// } else {
//   alert("No");
// }

const number = prompt("Enter your age:");
n = Number.parseInt(number);

n > 18 ? alert("You can drive.") : alert("You cannot drive.");

// function sum(a, b) {
//   return a + b;
// }
// let x = 2;
// let y = 7;
// console.log("Sum=", sum(x, y));
