// let Car = class {
//   constructor(brand, model, color) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//   }
// };
// const myCar = new Car("subaru", "forester", "white");
// const mamCar = new Car("nissan", "tidda", "schwarz");

// console.log(myCar);
// console.log(mamCar.color);

class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}

class Student extends User {
  constructor(userName, password, age) {
    super(userName, password);
    this.age = age;
  }
}

const lasha = new User("lasha98", "lashalasha");
const stundentLasha = new Student("lasha98", "lashalasha", 25);

console.log(lasha);
console.log(stundentLasha);
