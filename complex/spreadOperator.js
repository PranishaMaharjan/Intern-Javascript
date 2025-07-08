const a = [10, 20];
const b = [80, ...a, 90];
console.log(b);

// CONCATENATE  a and b
const c = [...a, ...b];
console.log(c);

// working with objects
const person = {
  fname: "Pranisha",
  lname: "Maharjan",
  age: 22,
};
const person1 = { ...person };
console.log(person1);

// // PROMPT
// const ingredients = [
//   prompt("Lets make a cake"),
//   prompt("Ingredients 1"),
//   prompt("Ingredients 2"),
// ];
// console.log(ingredients);

// for array
var names = ["Pranisha", "Pratima", "Arnav", "Nischal"];
function getnames(name1, name2, name3, name4) {
  console.log(name1, name2, name3, name4);
}
getnames(...names);

// for objects
const student = {
  fname: "Pranisha",
  age: 22,
  hobbies: ["Singing", "Dancing"],
};

const newstudent = {
  ...student,
  fname: "Pratima",
};
console.log(newstudent);
