// Looks like JSON [key : value pairs]
let person = {
    name: "John",
    age: 25
};

// dot notation [we added an attribute]
person.gender = "Male";

// bracket notation [we added an attribute]
person["name"] = "Eshan";

// we can use bracket notation to access attributes
console.log(person["name"]);
console.log(person);