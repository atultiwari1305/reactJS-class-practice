// use strict use to give permission for readonly
const student = {
    name : "Atul",
    printName : function(){
        console.log(this);
    }
};
student.printName();

const student2 = {
    name: "Raj"
};
student.printName.call(student2);

"use strict";
function d() {
  console.log(this);
}
d();

const fun = () => {
  console.log(this);
};
fun();

console.log(this);

const obj = {
  y: 5,
  c: function () {
    console.log(this.y);
  },
};
obj.c();

//this keyword in arrow function (there is no phenomena of binding 'this' in arow fnc)

const obj3 = {
  a: 45,
  b: () => {
    console.log(this);
  },
};

obj3.b();

// enclosing ;exocal context -> how this is written in code

const obj4 = {
  j: 78,
  h: function () {
    // this function binds 'this'
    const i = () => {
      // arrow function will not bind 'this'
      console.log(this);
    };
    i();
  },
};

obj4.h();
