console.log(this);


"use strict";
function d(){
    console.log(this);
}
d();

const fun = () => {
    console.log(this);
};
fun();

const obj={
    y : 5,
    c : function(){
        console.log(this.y);
    }
};
obj.c();