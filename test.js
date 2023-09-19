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

// const user = {
//   name: `lasha`,
//   lastName: `jojua`,
//   age: undefined,
//   city: undefined,
//   kom: null,
// };

// const { age = 30 } = user;

// console.log(age);

// -----------call back----------\\

// const a = () => {
//   console.log(2 + 10);
// };

// const c = (Callback) => {
//   setTimeout(() => {
//     console.log("5");
//     Callback();
//   }, 5000);
// };

// const b = () => {
//   console.log(250 - 15);
// };

// c(b);

// let bikes = [`suzi`, `bmw`, `merc`, `niva`];

// bikes.splice(2, 1, `lasha`);

// console.log(bikes);

// let bikes = [`suzi`, `bmw`, `merc`, `niva`];

// let iii = bikes.slice(1, 2);

// console.log(iii);

// const numbers = [
//   1, 2, 3, 4, 5, 20, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99,
// ];

// const result = numbers.filter((number) => {
//   return number <= 20;
// });

// console.log(result);

const users = [
  {
    name: "a",
    age: "b",
  },
  {
    name: "m",
    age: "c",
  },
  {
    name: "k",
    age: "b",
  },
  {
    name: "e",
    age: "c",
  },
];

const b = users.filter((b) => b.age == "c");
console.log(b);
