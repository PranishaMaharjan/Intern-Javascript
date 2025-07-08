// EXAMPLE1
function myfunction(a, b) {
  return a + b;
}
console.log(myfunction(2, 3));

// WITH PARAMETERS
function print1(uname) {
  return `Hello ${uname}`;
}

let vname = "Pranisha";
console.log(print1(vname));

// WITHOUT PARAMETERS
function print2() {
  return `Heloo`;
}
// let sname = "Pranisha";
console.log(print2());

/////////////////////////////////////
// ARROW FUNCTION
const sum = (a, b) => {
  return a + b;
};
console.log(sum(3.4, 3));

////////////////////////////////////////
// FINDING LENGTH OF WORDS OF ARRAY
const friends = ["Prerana", "Rijen", "Anish", "Pratima"];

// NORMAL FUNCTION
const length1 = friends.map(function length1(s) {
  return s.length;
});
console.log(`Normal Function= ${length1}`);

//ARROW FUNCTION
const length2 = friends.map((p) => {
  return p.length;
});
console.log(`Arrow Function=${length2}`);

//////////////////////////////////////////////////////////
// NESTED FUNCITONS
function outerFun(x) {
  function innerFun(y) {
    return x + y;
  }
  return innerFun(10);
}
const addFun = outerFun(10);
console.log(addFun);
