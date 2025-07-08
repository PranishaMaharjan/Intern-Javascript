// DESTRUCTURING ARRAY
// EXAMPLE 1
const arr1 = [2, 3, 4];
const [x, y, z] = arr1;
console.log(y, x, z);

// EXAMPLE 2
const person = {
  fname: "Pranisha",
  lname: "Maharjan",
  semester: 3,
  hobbies: ["singing", "dancing", "eating"],
  skills: ["html", "css", "js"],
  friends: ["Prerana", "Rijen", "Anish"],

  mix: function (skillsIndex, friendsIndex) {
    return [this.skills[skillsIndex], this.friends[friendsIndex]];
  },
};
let [m, n, o] = person.hobbies;
console.log(m, n, o);

// SWAP VALUES
const temp = m;
m = n;
n = temp;
console.log(m, n);

// FUNCTION
const [v, w] = person.mix(2, 2);
console.log(v, w);

// DEFAULT VALUES
const [p = 0, q = 0, r = 0] = [8, 9];
console.log(p, q, r);

// destructuring string
const str = "Prani";
const [a1, a2, a3, a4, a5] = str; //default values a5="a"
console.log(a5);

const { [0]: j, [1]: k, [2]: l } = person.hobbies;
console.log(j, k);
