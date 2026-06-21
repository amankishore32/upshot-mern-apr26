// const person = {
//   name: "Saadique",
//   address: {
//     line: "",
//     city: "",
//     state: "",
//     getAddress: function () {
//       console.log(this.line);
//     },
//   },
// };

// // const arr = [1, 2, 3];
// console.log(person);
// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("age"));

function Car(model, year) {
  this.model = model;
  this.year = year;
}

Car.prototype.__proto__.dsiplayInfo = function () {
  return `This is a ${this.model} of year ${this.year}.`;
};

let car1 = new Car("Toyota Camry", "2021");
let car2 = new Car("Ford Mustang", "2023");

console.log(car1.dsiplayInfo());
console.log(car2);


// H.W. -> Object.create(), Object.getprototypeof(), Object.setPrototypeof()
