// const person = {
//   name: "Pranisha",
//   age: 22,
//   city: "Kathmandu",
// };
// console.log(`${person.name},${person.age},${person.city}`);

//   Question2:Add and update property in object
const car = {
  properties: "a",
  model: "b",
  brand: "c",
};
// car.year = 2001;
Object.assign(car, { year: 2002, model: "dc" });
console.log(`${car.year},${car.model}`);

// // Question3: delete property
// const book = {
//   title: 1984,
//   author: "George Orwell",
//   pages: 328,
// };
// delete book.title;
// console.log(book);

// // Question4: Check for property
// const smartphone = {
//   brand: "Apple",
//   model: "Iphone 13",
// };

// function hasProperty(obj, prop) {
//   let result = "";
//   for (let key in obj) {
//     if (key == prop) {
//       return (result = "yes");
//     } else {
//       result = "No";
//     }
//   }
//   return result;
// }
// console.log(hasProperty(smartphone, "brand"));

// // Question5: Iterate over an object
// const fruits = {
//   apple: 40,
//   banana: 50,
//   cherry: 60,
// };
// for (let x in fruits) {
//   console.log(`${x}: ${fruits[x]}`);
// }

// //   Question6: object keys and values
// const student = {
//   name: "Alice",
//   grade: "A",
//   subject: "Math",
// };

// // Question7: copy object
// const original = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(original);
// const copy = {
//   ...original,
//   c: 5, //modify copy
// };
// console.log(copy);

// // Question8: Merge 2 objects
// const obj1 = {
//   x: 1,
//   y: 2,
// };
// const obj2 = {
//   z: 3,
//   w: 4,
// };
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// // Question9: Nested Objects
// const user = {
//   name: "Harry",
//   email: "harry@gmail.com",
//   address: { city: "Kathmandu", place: "Bagbazar" },
// };
// console.log(user.address.city);

// // Question10: convert object into array
// const colors = {
//   red: "#FF0000",
//   green: "#00FF00",
//   blue: "#0000FF",
// };
// const colorarray = Object.entries(colors);
// console.log(colorarray);

//OBJECT MANIPULATION MONTHLY GOAL
// 1. Transform array to object by id
const people = [
  { id: 101, name: "John" },
  { id: 102, name: "Alice" },
];

const peopleObject = Object.fromEntries(people.map((p) => [p.id, p]));
console.log(peopleObject);

// 2. Merge two objects deeply
const a = { user: { name: "John", address: { city: "New York", zip: 10001 } } };
const b = { user: { age: 30, address: { street: "5th Ave" } } };

function deepMerge(target, source) {
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      if (!target[key] || typeof target[key] !== "object") {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
const merged = deepMerge({ ...a }, b);
console.log(merged);

// 3. Sort array of objects by multiple fields
// Output: Sorted by name, then by price ascending
const items = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 20 },
  { name: "Pen", price: 5 },
];

items.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  let priceAscending = a.price - b.price;
  return priceAscending;
});
console.log(items);
