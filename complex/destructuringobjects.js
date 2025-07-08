const person = {
  fname: "Pranisha",
  lname: "Maharjan",
  age: 22,
};
const { fname, lname, age, country = "Nepal" } = person;
console.log(fname, age, country);
console.log(person.fullname());
