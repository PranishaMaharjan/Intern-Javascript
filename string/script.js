let person = " Harry  ";
let animal = "Monkey";
let helo = "hello tommy";

console.log(person.length);

console.log(person.toUpperCase());
console.log(person.toLowerCase());
console.log(person.slice(0, 5));
console.log(person.replace("H", "R"));
// console.log(person.replace("Hy", "w"));

console.log(person.concat(animal, "same"));

// remove white spaces
console.log(person.trim());

// same as slice()
console.log(person.substring(0));

console.log(person.charAt(4));
console.log(person.indexOf("a"));
console.log(person.split("a"));

// checks if the string or letter is included in the string output is in true or false
console.log(person.includes("b"));

console.log(person.match());
