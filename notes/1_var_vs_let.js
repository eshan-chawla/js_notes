
// var vs let
if (true) {
    var a = 5;
    let b = 10;
    console.log("Inside if block");
    console.log(a); // 5
    console.log(b); // 10
}

console.log("Outside if block");
console.log(a); // 5
console.log(b); // ReferenceError: b is not defined

// var is function scoped, let is block scoped and hence safer
// if we reference a variable before declaring it, var will be undefined and let will throw a ReferenceError

