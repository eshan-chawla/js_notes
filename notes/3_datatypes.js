// Js is dynamically typed language and hence variables can be changed to different datatypes

let name = "John"; // string literal
console.log(name);
console.log(typeof name);
let age = 25; // number literal [here folats are also numbers only]
console.log(age);
console.log(typeof age);
let isApproved = true; // boolean literal
console.log(isApproved);
console.log(typeof isApproved);
// variables are undefined naturally so it's not recommended to use undefined
let lastName = undefined;
console.log(lastName);
console.log(typeof lastName);
// variables are assigned null to represent an empty or unknown value
let selectedColor = null;
console.log(selectedColor);
console.log(typeof selectedColor);



// proof of dynamic typing
console.log("Proof of dynamic typing : ");
let a = "ten";
console.log(typeof a);
a = 10;
console.log(typeof a);