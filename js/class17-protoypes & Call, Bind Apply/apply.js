// const person1 = {
//   name: "Aman",
//   age: 29,
//   printInfo: function (location, hobby) {
//     console.log(
//       `This is ${this.name} and person is ${this.age} years old. lives at ${location} like to play ${hobby}`,
//     );
//   },
// };

// const person2 = {
//   name: "Saadiqu",
//   age: 26,
// };

// person1.printInfo("Bangaluru", "Cricket");

// person1.printInfo.apply(person2, ["Hydrabad", "Football"]);

const numbers = [2, 5, 1, 7, 3, 9];

console.log(Math.max.apply(null, numbers));

console.log(Math.max.call(null, numbers));
