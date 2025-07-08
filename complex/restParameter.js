function fun(...input) {
  let sum = 0;
  for (let i of input) {
    sum = sum + i;
  }
  return sum;
}
console.log(fun(1, 3));
console.log(fun(9, 2, 3, 0, 10));

// Using rest paramter with other parameter
function people(a, b, d, ...c) {
  console.log(`${a}\t${b}`);
  console.log(`${c}${d}`);
}
people("Pranisha", "Pratima", "Arnav", "Nischal");

function add(a, b, c, ...d) {
  console.log(d);
  console.log(a + b + c);
}
add(1, 2, 3, 4, 5, 6, 7, 8);

// for objects
const student = {
  fname: "Pranisha",
  age: 22,
  hobbies: ["Singing", "Dancing"],
};
const { ...rest } = student;
console.log(rest);
