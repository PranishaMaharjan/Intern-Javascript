// 1
// 12
// 123
// 1234
// 12345
let pattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
  console.log("\n");
}

// 12345
// 1234
// 123
// 12
// 1
for (let m = 1; m <= 5; m++) {
  for (let n = 5; n >= m; n--) {
    console.log(n);
  }
  console.log("\n");
}

//longestword
console.log("25" - 5);
console.log("25" + 5);
console.log("25" * 5);
console.log("25" / 5);

// CODING CHALLENGES
// Video 029
// QUESTION 1
let bill = 100;
const tipCalculate = () => {
  if (bill > 50 || bill < 300) {
    total = bill * 5;
  } else {
    total = bill * 0.2;
  }
  return total;
};
// console.log(tipCalculate());
let tip = tipCalculate();
console.log(
  `The bill was ${bill} tip was ${tip} and total value was ${bill + tip}`
);

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstname} retires in ${retirement}`;
};
console.log(yearsUntilRetirement(2002, "Pranisha"));
