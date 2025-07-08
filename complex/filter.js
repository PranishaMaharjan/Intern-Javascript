// passes the value in arr2 (new array) if the return condition is true
let arr1 = [1, 2, 33, 44, 56, 21];
let arr2 = arr1.filter((value, index) => {
  return value % 2 == 0;
});
console.log(arr2);
