const person1 = {
  name: "Aman",
  age: 29,
  printInfo: function (location) {
    console.log(
      `This is ${this.name} and person is ${this.age} years old, lives at ${location}`,
    );
  },
};

const person2 = {
  name: "Saadiqu",
  age: 26,
};

person1.printInfo("Bangaluru");

person1.printInfo.call(person2, "Hydrabad");

// Using the "call()" function we can change the context of the "this" keyword by passing the new context inside the call function.
