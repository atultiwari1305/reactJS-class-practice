const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(num=>num%2==0);
console.log("Even Numbers: ", evenNumbers);

const squareNumbers = evenNumbers.map(num=>num**2);
console.log("Sqaure of Even Numbers: ",squareNumbers);

const greaterNumber = squareNumbers.find(num => num>30);
console.log("Numbers greater than 30: ", greaterNumber);

const squareNumbers2 = [144, 169 ,196, 225];
const combinedArray = squareNumbers.concat(squareNumbers2);
console.log("Combined Sqaured Array: ",combinedArray);

const name = "Atul";
console.log(Array.from(name));
//array.within
//array.of
//entries
console.log("Enteries are: ");
for(const [index,value] of combinedArray.entries())
console.log(index,value);