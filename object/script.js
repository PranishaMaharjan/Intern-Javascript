const student = {
  name: "Anisha",
  class: 12,
  section: "A",

  studentdetail: function () {
    return `Student:${this.name}, Class:${this.class}, Section:${this.section}`;
  },
};
c;
//////////////////////////////////////////////////////////////////////
// METHODS TO DEFINE JS OBJECTS
// USIING OBJECT LITERALS
const person1 = {
  fname: "Pranisha",
  lname: "Maharjan",
  age: 22,
};
console.log(
  `Using object literals\n${person1.fname}\t${person1.lname}\t${person1.age}`
);

// USING NEW KEYWORD
const person2 = new Object();
person2.firstname = "Prerana";
person2.lastname = "Shrestha";
person2.age = 23;
console.log(
  `Using new keyword\n${person2.firstname}\t${person2.lastname}\t${person2.age}`
);

// USING CONSTRUCTOR
function person3(fname, lname, age) {
  this.firstname = fname;
  this.lastname = lname;
  this.age = age;
}
const friend = new person3("Pratima", "Dangol", 20);
console.log(
  `Using object constructor\n${friend.firstname}\t${friend.lastname}\t${friend.age}`
);
