const result1 = false && console.log("This wont print");
console.log(result1);

const result2 = ("" && 0) || (2 && 8);
console.log(result2);

const result3 = 8 && 3;
console.log(result3);

function myfunction(a) {
  if (a % 2 == 0 && a > 4) {
    return "Something";
  } else {
    return "none";
  }
}
console.log(myfunction(8));
