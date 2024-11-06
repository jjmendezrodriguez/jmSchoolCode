// Objects:

/* The objects are like dictionaries in Python. They are a collection of key-value pairs.
    The keys are strings and the values can be any data type. */

let person = {
  // ^ Create like a variable but with curly braces.
  age: 32,
  name: "John",
  isAlive: true,
  knowledge: ["JavaScript", "Python", "C++"], // the value can be an array.
  sportImage: ["fail path here"], // the value can be an object (images, files...).
};

/* For use they value call the variable followed by a dot notation (.) and the key.
variable.key = person.name */

console.log(person); // { age: 32, name: 'John', isAlive: true }
console.log(person.name); // John
console.log(person[1]); // not working like an array. the return is undefined.
console.log(person["name"]); // this is a nother way to access the value of a key. braket notation.
console.log(person.knowledge[0]); // JavaScript this is how you access the value of an array inside an object.

/* The sintaxis we use in javascript is similar like objects.method(value) we use this other way to access the value of a key,
for sample:
document.getElementById("id").textContent = "value" document is the object, getElementById is the method and id is the key. */
