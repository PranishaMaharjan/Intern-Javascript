// // Question1: Create an array
// const fruits = ["apple", "banana", "cherry"];
// console.log(`The fruits are:${fruits}`);

// // Question2: Access array (Print 1st and last elements using index)
// const length = fruits.length;
// console.log(
//   `Accessing first and last index array:${fruits[0]} and ${fruits[length - 1]}`
// );

// // Question3: Add elements to array
// const fruits2 = ["apple", "banana"];
// fruits2.push("cherry");
// fruits2.unshift("orange");
// console.log(fruits2);

// // Question4: Delete last element using pop() and 1st element using shift()
// fruits2.pop();
// fruits2.shift();
// console.log(fruits2);

// // Question5: Use of function
// const names = ["Pranisha", "Saugat", "Tara"];
// function nameChecker(array, element) {
//   let result = "";
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == element) {
//       return (result = `${element} is found`);
//     }
//   }
//   result = `${element} is not found`;
//   return result;
// }

// console.log(nameChecker(names, "Pratima"));

// // Question6: Combine 2 array
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(`By concat function${array1.concat(array2)}`);
// console.log(`By spread operator${[...array1, ...array2]}`);

// // Question7: Sort Array in ascending order
// const numbers = [3, 1, 4, 1, 5, 9];
// ascending = numbers.sort((first, second) => first - second);
// console.log(ascending);

// // Question8: Filter array less than 30
// let numbers2 = [10, 25, 30, 45, 50];
// let numbers3 = numbers2.filter((num) => {
//   return num < 30;
// });
// console.log(numbers3);

// // Question9: Map over an array where each number is squared
// let numbers4 = [1, 2, 3, 4, 5];
// let numbers5 = numbers4.map((num) => {
//   return num * num;
// });
// console.log(numbers5);

// // Question10:Find element using find()
// let numbers6 = [10, 20, 30, 40, 50];
// let numbers7 = numbers6.find((num) => {
//   return num > 25;
// });
// console.log(numbers7);

// // Question11: reduce array
// let numbers8 = [1, 2, 3, 4];
// let numbers9 = numbers8.reduce((num1, num2) => {
//   return num1 + num2;
// }, 0);
// console.log(numbers9);

// // Question12: reverse array
// let letters = ["a", "b", "c", "d"];
// console.log(letters.reverse());

// // Question13: split and join array
// const str = "hello world";
// const convertIntoArray = str.split(" ");
// console.log(convertIntoArray);
// const convertIntoString = convertIntoArray.join("-");
// console.log(convertIntoString);

//Array Manipulation Monthly
// 1.filter active users
const users = [
  { name: "Alice", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
];

const activeUsers = users.filter((u) => u.isActive == true);
console.log(activeUsers);

// 2. Group students by grade
const students = [
  { name: "John", grade: "A" },
  { name: "Jane", grade: "B" },
  {
    name: "Jake",
    grade: "A",
  },
  { name: "Jill", grade: "C" },
];

const gradea = students
  .filter((s) => s.grade == "A")
  .map((a) => ({
    name: a.name,
  }));

const gradeb = students
  .filter((s) => s.grade == "B")
  .map((a) => ({
    name: a.name,
  }));

const gradec = students
  .filter((s) => s.grade == "C")
  .map((a) => ({
    name: a.name,
  }));

const output = {
  A: gradea,
  B: gradeb,
  C: gradec,
};
console.log(output);

// 3. Remove duplicate values from array
const numbers = [1, 2, 2, 3, 4, 4, 5];

const removeNumbers = numbers.filter((value, index, numbers) => {
  return numbers.indexOf(value) == index;
});
console.log(removeNumbers);

// 4. Flatten a nested array
const att = [1, [2, 3], [4, [5, 6]]];
const flatArray = att
  .flatMap((item) => (Array.isArray(item) ? item : [item]))
  .flatMap((item) => (Array.isArray(item) ? item : [item]));

// const flatArray = att.flatMap((f) => (Array.isArray(f) ? f : [f]));
console.log(flatArray);

// 5. Count occurrences of each fruit
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// let count = 0;
const appleCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});

console.log(appleCount);

// 6. Get top 2 most expensive products
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  {
    name: "Tablet",
    price: 600,
  },
];
let expensive1 = 0;
let expensive2 = 0;
for (let i = 0; i < products.length; i++) {
  let price = products[i].price;

  if (price > expensive1) {
    expensive2 = expensive1;
    expensive1 = price;
  } else if (price > expensive2) {
    expensive2 = price;
  }
}
console.log(expensive1, expensive2);

// 7. Sum all ages in a nested structure
const family = {
  father: { age: 50 },
  mother: { age: 48 },
  children: [
    { name: "Anna", age: 20 },
    { name: "Tom", age: 18 },
  ],
};
const totalAge = [
  family.father.age +
    family.mother.age +
    family.children.map((c) => c.age).reduce((sum, age) => sum + age, 0),
];
console.log(totalAge);
