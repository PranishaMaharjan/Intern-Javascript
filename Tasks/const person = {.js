const person = {
    name: "Pranisha",
    age: 22,
    city: "Kathmandu",
  };
  console.log(`${person.name},${person.age},${person.city}`);
  
//   Question2:Add and update property in object
const car = {
    properties: "a",
    model: "b",
    brand: "c",
  };
//   car.year = 2001;
Object.assign(car, { year: 2002  ,model:'dc'});
console.log(`${car.year},${car.model}`);

// Question3: delete property
const book = {
    title: 1984,
    author: "George Orwell",
    pages: 328,
  };
  delete book.title;
  console.log(book);

  // Question4: Check for property
const smartphone = {
    brand: "Apple",
    model: "Iphone 13",
  };
  
  function hasProperty(obj, prop) {
    let result = "";
    for (let key in obj) {
      if (key == prop) {
        return (result = "yes");
      } else {
        return (result = "No");
      }
    }
    return result;
  }
  console.log(hasProperty(smartphone, "model"));

  // Question5: Iterate over an object
const fruit = {
    apple: 40,
    banana: 50,
    cherry: 60,
  };
  for (let x in fruit) {
    console.log(x);
  }
  