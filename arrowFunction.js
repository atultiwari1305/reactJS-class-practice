// arrow function with single expressioin

const square = (x) => x * x;

console.log(square(4));

// arrow function with two params
const add = (a, b) => a + b;

console.log(add(1, 3));

//obj literals
const person = (name, age) => {
  name: name;
  age: age;
};

const personx = person("Atul", 45);
console.log(person);
console.log(personx);

const createperson = (firstName, birthYear) => {
  return {
    firstName: firstName,
    birthYear: birthYear,
  };
};

const personone = createperson("Abhishek", 2003);
console.log(personone);
