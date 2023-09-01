// let Car = class {
//     constructor(brand, model, color) {
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//     }
// };
// const myCar = new Car("subaru", "forester", "white");
// const mamCar = new Car("nissan", "tidda", "schwarz");

// console.log(myCar);
// console.log(mamCar.color);

// class User {
//   constructor(userName, password) {
//     this.userName = userName;
//     this.password = password;
//   }
// }

// class Student extends User {
//   constructor(userName, password, age) {
//     super(userName, password);
//     this.age = age;
//   }
// }

// const lasha = new User("lasha98", "lashalasha");
// const stundentLasha = new Student("lasha98", "lashalasha", 25);

// console.log(lasha);
// console.log(stundentLasha);

// class Poker {
//   constructor(kare, flush, stright) {
//     this.kare = kare;
//     this.flush = flush;
//     this.stright = stright;
//   }
// }

// console.log(Poker);

// const myPoker = new Poker(2, "heart", "45678");

// console.log(myPoker);

// class User {
//   constructor(saxeli, gvari) {
//     this.saxeli = saxeli;
//     this.gvari = gvari;
//   }
// }

// class Story extends User {
//   constructor(saxeli, gvari, weli) {
//     super(saxeli, gvari);
//     this.weli = weli;
//   }
// }

// const UserName = new User("lasha", "jojua");
// const StoryName = new Story("lasha", "jojua", 25);

// console.log(UserName);
// console.log(StoryName);

// import { user } from "./module";

// console.log(user);

// import car, { user as mamuka, userName, UserFirst } from "./module.js";

// const clasi = new UserFirst(`messi`, `ronaldo`);

// userName("mamukaboro");
// console.log(mamuka, car, clasi);

// 27

const user = {
  name: `lasha`,
  lastName: `jojua`,
  age: 25,
  city: undefined,
  kom: null,
};

const { kom } = user;

console.log(kom);
