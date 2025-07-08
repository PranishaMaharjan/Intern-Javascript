// Question1: Create an array
const fruits = ["apple", "banana", "cherry"];
console.log(`The fruits are:${fruits}`);

// Question2: Access array (Print 1st and last elements using index)
const length = fruits.length;
console.log(
  `Accessing first and last index array:${fruits[0]} and ${fruits[length - 1]}`
);

// Question3: Add elements to array
const fruits2 = ["apple", "banana"];
fruits2.push("cherry");
fruits2.unshift("orange");
console.log(fruits2);

// Question4: Delete last element using pop() and 1st element using shift()
fruits2.pop();
fruits2.shift();
console.log(fruits2);

// Question5: Use of function
const names = ["Pranisha", "Pratima", "Arnav", "Nischal"];
function myfunction(array, element) {
  for (let x in names) {
    for (let y of names) {
      if (x != array && y != element) {
        return "Element is not in array";
      } else {
        return "Element is in array";
      }
    }
  }
}
console.log(myfunction(names[2], "Arnav"));

// Question6: Combine 2 array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(`By concat function${array1.concat(array2)}`);
console.log(`By spread operator${[...array1, ...array2]}`);

// Question7: Sort Array in ascending order
const numbers = [3, 1, 4, 1, 5, 9];
ascending = numbers.sort((first, second) => first - second);
console.log(ascending);

// Question8: Filter array less than 30
let numbers2 = [10, 25, 30, 45, 50];
let numbers3 = numbers2.filter((num) => {
  return num < 30;
});
console.log(numbers3);

// Question9: Map over an array where each number is squared
let numbers4 = [1, 2, 3, 4, 5];
let numbers5 = numbers4.map((num) => {
  return num * num;
});
console.log(numbers5);

// Question10:Find element using find()
let numbers6 = [10, 20, 30, 40, 50];
let numbers7 = numbers6.find((num) => {
  return num > 25;
});
console.log(numbers7);

// Question11: reduce array
let numbers8 = [1, 2, 3, 4];
let numbers9 = numbers8.reduce((num1, num2) => {
  return num1 + num2;
}, 0);
console.log(numbers9);

// Question12: reverse array
let letters = ["a", "b", "c", "d"];
console.log(letters.reverse());

// Question13: split and join array
const str = "hello world";
const convertIntoArray = str.split(" ");
console.log(convertIntoArray);
const convertIntoString = convertIntoArray.join("-");
console.log(convertIntoString);
