const aman = {
  name: "Aman",
  age: 29,
  greet: function () {
    console.log(`Hey this ${this.name} and I am ${this.age} years old`);
  },
};

const greetBtn = document.querySelector("#intro");

greetBtn.addEventListener("click", aman.greet.bind(aman));
