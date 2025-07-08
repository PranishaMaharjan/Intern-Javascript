let arr1 = [1, 2, 3, 4];
const arr2 = arr1.map((x, index) => x * 2);
console.log(arr2);

const arr3 = [1, 2, 3, 4, 5, 6, 6];
const arr4 = arr3.map((num) => num * num);
console.log(arr4);

let arr5 = arr1.map(function (x, y) {
  return `key: ${y}, value: ${x * x}`;
});
console.log(arr5);

let str = ["1", "2", "3", "4", "5"];
let arr6 = str.map((x) => parseInt(x));
console.log(arr6);

// ceates new array
let a = [44, 55, 66];
const b = a.map((value, index, array) => {
  return value + index;
});
console.log(b);
