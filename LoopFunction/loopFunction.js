// const marks = {
//   Harry: 87,
//   Subham: 76,
//   Jack: 99,
//   Bishal: 44,
// };

// // QUESTION 1
// for (i = 0; i < Object.keys(marks).length; i++) {
//   console.log(
//     "Marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]
//   );
// }

// // QUESTION 2
// for (let key in marks) {
//   console.log("The mark of " + key + " is " + marks[key]);
// }

// // QUESTION 3
// let correct = 4;
// // const number = prompt("Enter correct number:");
// let i;
// while (i != correct) {
//   i = prompt("Enter correct number:");
//   console.log("try again");
// }
// console.log("You have entered a correct number.");

// QUESTION 4
let j;

// const mean = (a, b, c, d, e) => {
//   return (a + b + c + d + e) / 5;
// };
// console.log(mean(1, 2, 3, 4, 5));

const mean = () => {
  for (j = 0; j < 5; j++) {
    const number = prompt("Enter 5 numbers:");
    j++;
  }
  return number / 5;
};
console.log(mean());
