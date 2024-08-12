//SCOPE OF VARIABLES
var globalVar = "I am Global"
console.log(globalVar)

function localVar(){
    var locVar = "I am Local"
    console.log(locVar)
}
localVar()
// console.log(locVar)

//REDECLARATION & REASSIGNMENT IN VAR
function abc(){
    var x=50;
    var x=10;
    console.log(x)
}
abc()
var x = 20;
console.log(x);
//redeclaration and reassignment are allowed

//REDECLARATION & REASSIGNMENT IN LET
//redeclaration not allowed but reassignment is allowed

//REDECLARATION & REASSIGNMENT IN CONST
//redeclaration and reassignment both are not allowed