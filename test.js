class Car {
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
}
const myCar = new Car("subaru", "forester", "white");
const mamCar = new Car("nissan", "tidda", "schwarz");

console.log(myCar);
console.log(mamCar.color);
