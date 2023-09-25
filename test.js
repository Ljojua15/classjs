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

// const users = [
//   {
//     name: "a",
//     age: "b",
//   },
//   {
//     name: "m",
//     age: "c",
//   },
//   {
//     name: "k",
//     age: "b",
//   },
//   {
//     name: "e",
//     age: "c",
//   },
// ];

// const b = users.filter((b) => b.age == "c");
// console.log(b);

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 500 },
//   { name: "Monitor", price: 500 },
// ];

// const filterAffordableProducts = products.filter((b) => b.price == 500);

// console.log(filterAffordableProducts);

// const number = [15, 25, 30, 47, 50, 62];

// const filterEvenNumbers = number.filter((b) => {
//   return b > 30;
// });

// console.log(filterEvenNumbers);

// function filterEvenNumbers(arr) {
//   return arr.filter(function (number) {
//     return number / 2 !== 0;
//   });
// }

// const number = [15, 25, 30, 47, 50, 62];

// const evenNumbers = filterEvenNumbers(number);

// // console.log(number);
// console.log(evenNumbers);

// console.log(number);

// const testtest = (number) => {
//   return number.forEach((x) => {
//     return x / 2;
//   });
// };
// const answer = testtest(number);

// console.log("hiii", answer);

// const numbers = [15, 25, 30, 47, 50, 62];
// const divisor = 2;

// numbers.forEach(function (element, index) {
//   numbers[index] = element / divisor;
// });

// console.log("Array after division:", numbers);

// // const uH = numbers.map(function (croco) {
// //   return croco / 4;
// // });

// // console.log(uH);

// console.log(numbers);

// const cC = [20, 25, 30, 35, 40];

// const fF = cC.map(function (translate) {
//   return (translate * 9) / 5 + 32;
// });

// console.log(fF);

// const summ = [10, 15, 20, 25, 30];
// let sum = 0;
// summ.forEach(function (element) {
//   sum = element + sum;
// });

// console.log(sum);

////პრომისები

// let promise = new Promise((x, y) => {
//   setTimeout(() => {
//     if (2 > 3) {
//       x("kai");
//       return;
//     }
//     y("ara");
//   }, 5000);
// });

// promise.then((z) => console.log(z)).catch((u) => console.log(u));

// function generateNumber() {
//   return new Promise((tanxmoba, uaryofa) => {
//     let x = 2;
//     setTimeout(() => {
//       const randomNummer = x + Math.floor(Math.random() * 20) + 1;
//       tanxmoba(randomNummer);
//     }, 1000);
//   });
// }

// function nomrisGamodzaxeba() {
//   generateNumber()
//     .then((randomNummer) => {
//       console.log("random nomeri:", randomNummer);
//     })
//     .catch((shecdoma) => {
//       console.log("shecdoma:", shecdoma);
//     });
// }

// nomrisGamodzaxeba();

let fruits = new Promise((resolve, reject) => {
  const newFruit = ["apple", "banana", "cherry"];
  const colors = ["red", "green", "blue", "yellow", "purple"];

  if (false) {
    resolve(newFruit);
    return;
  }
  reject(colors);
});

const printFruCol = async () => {
  try {
    const res = await fruits;
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

printFruCol();

// const fruitsPromise = new Promise((resolve, reject) => {
//   const newFruit = ["apple", "banana", "cherry"];

//   // Simulating an error condition
//   const isError = false; // Set to true to simulate a rejection

//   if (isError) {
//     resolve(newFruit);
//   } else {
//     reject("Error: Failed to fetch fruits");
//   }
// });

// const printFruCol = async () => {
//   try {
//     const res = await fruitsPromise;
//     console.log("Fruits:", res);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// printFruCol();
