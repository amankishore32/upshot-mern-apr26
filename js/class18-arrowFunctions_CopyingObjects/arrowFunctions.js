// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// greet("Saadique");

// const greet = (name) => {
//   console.log(`Hello ${name}`);
// };

// greet("Aman");

// const functionName = (param1, param2,....) => {}

// const greet = (name) => `Hello ${name}`; // Implicit return statement

// console.log(greet("Aman"));

// const arr = [1, 2, 3];

// // arr.forEach(function (num) {
// //   console.log(num);
// // });

// arr.forEach((num) => console.log(num));

// (function () {
//   console.log("");
// })(() => console.log(""));

const person = {
  name: "Aman",
  skills: ["HTML", "CSS", "JS"],
  showSkill() {
    this.skills.forEach((skill) => {
      console.log(`${this.name} knows ${skill}`);
    });
  },
};

person.showSkill();
