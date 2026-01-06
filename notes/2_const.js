let name;
console.log(name); // undefined

// initialized before 
name = "John";
console.log(name); // John

// constants cannot be redeclared or altered
const age = 25;
console.log(age); // 25

age = 30;
console.log(age); // TypeError: Assignment to constant variable.
