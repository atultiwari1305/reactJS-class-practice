class Car{
    constructor(brand){
        this.brand = brand;
    }
    display(){
        return `I have a ${this.brand}.`;
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    show(){
        return this.display() + ` It is a ${this.model}.`;
    }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());