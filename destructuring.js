//destructring in js
//ES6
const progLang = ["HTML", "CSS", "Python", "Js", "C", "Java"];
const [first, second, , , fifth] = progLang;

console.log(first, second, fifth);

//Spread Operator -> (...)

const fruits = ["apple", "banana", "cherry", "mango"];
const veg = ["carrot", "broccoli", "spanish"];

//copy

const fruitsCopy = [...fruits];
console.log("fruits copy ", fruitsCopy);

//merge array

const food = [...fruits, ...veg];
console.log(food);

const person = { name: "Atul", age: 21 };
const address = { city: "Mau", country: "India" };
