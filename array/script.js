let array1 = ["Pranisha", "Pratima", "Arnav", "Nischal"];
console.log(array1);

let array2 = new Array("Pranil", "Naman", "Nivriti");
console.log(array2);
console.log(array2[0]);
console.log(array1.indexOf("Nischal"));

// FOR LAST ARRAY OF ARRAY2
console.log(`Last array:` + array2[array2.length - 1]);

// ADDING ELEMENT IN THE END IN ARRAY2 ====> push
array2.push("Vijen");
console.log(array2);

// ADDING ELEMENT IN THE BEGINNING IN ARRAY2 ====> unshift
array2.unshift("Jita");
console.log(array2);

// REMOVE ELEMENTS FROM THE MIDDLE OF THE ARRAY2 ====> splice
array2.splice(2, 1);
console.log(array2);

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

const cars = ["Saab", "Volvo", "BMW"];

// accessing array
let car = cars[0];

// changing array
cars[0] = "Opel";

// Accessing all array
document.getElementById("demo").innerHTML = cars;
