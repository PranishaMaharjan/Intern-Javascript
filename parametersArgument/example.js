// function add(x, y) {
//   // x and y are parameters
//   return x + y;
// }

// let result = add(5, 3); // 5 and 3 are arguments
// console.log(result); // Output: 8

// const add = (x, y) => {
//   return x + y;
// };

// console.log(add(3, 5)); // Output: 8

// let a = 10;
// let b = 3;

// console.log(a + b); // Addition: 13
// console.log(a - b); // Subtraction: 7
// console.log(a * b); // Multiplication: 30
// console.log(a / b); // Division: 3.3333...
// console.log(a % b); // Modulus (Remainder): 1
// console.log(a ** b); // Exponentiation: 1000

// let x = 5;

// x += 2; // x = x + 2
// console.log(x); // 7

// x -= 1; // x = x - 1
// console.log(x); // 6

// x *= 3; // x = x * 3
// console.log(x); // 18

// x /= 2; // x = x / 2
// console.log(x); // 9

// x %= 4; // x = x % 4
// console.log(x); // 1

// let a = 10;
// let b = 5;

// console.log(a == b); // Equal: false
// console.log(a != b); // Not equal: true
// console.log(a > b);  // Greater than: true
// console.log(a < b);  // Less than: false
// console.log(a >= 10); // Greater than or equal to: true
// console.log(a === 10); // Strict equal (type + value): true
// console.log(a !== "10"); // Strict not equal (type + value): true

// let a = true;
// let b = false;

// console.log(a && b); // AND: false
// console.log(a || b); // OR: true
// console.log(!a); // NOT: false

// let a = 5; // Binary: 0101
// let b = 3; // Binary: 0011

// console.log(a & b); // AND: 1 (Binary: 0001)
// console.log(a | b); // OR: 7 (Binary: 0111)
// console.log(a ^ b); // XOR: 6 (Binary: 0110)
// console.log(~a);    // NOT: -6 (Inverts bits)
// console.log(a << 1); // Left shift: 10 (Binary: 1010)
// console.log(a >> 1); // Right shift: 2 (Binary: 0010)

let age = 18;
let category = age >= 18 ? "Adult" : "Minor";
console.log(category); // "Adult"

console.log(typeof 123); // "number"
console.log(typeof "Hello"); // "string"
console.log(123 instanceof Number); // false
