const numbers = [10, 20, 30];
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});
// Output:
// Index 0: 10
// Index 1: 20
// Index 2: 30

const fruits = ["Apple", "Banana", "Mango"];
for (let x of fruits) {
  console.log(x);
}

const animals = ["Tiger", "Buffalo", "Lion"];
for (let x in animals) {
  console.log(x);
}
