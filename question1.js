//question1.js
function createVehicle() {
    class Vehicle {
      constructor(make, model) {
        this.make = make;
        this.model = model;
      }
  
      getDetails() {
        return `model : ${this.model}, make: ${this.make}`;
      }
  
      //static method compare vehicle that takes two vehicle instances and return true if they are same make and model
      static compareVehicle(v1, v2) {
        return (v1.make === v2.make && v2.model === v1.model) 
      }
    }
    return Vehicle;
  }
  const Vehicle = createVehicle();
  const v1 = new Vehicle("ford", "escape");
  const v2 = new Vehicle("ford", "escape");
  const v3 = new Vehicle("volkswagen", "jetta");
  
  console.log(Vehicle.compareVehicle(v1, v3));