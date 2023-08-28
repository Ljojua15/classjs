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


class Poker {
    constructor(kare, flush, stright) {
        this.kare = kare;
        this.flush = flush;
        this.stright = stright;
    }
}

console.log(Poker);

const myPoker = new Poker(2, 'heart', "45678");

console.log(myPoker);