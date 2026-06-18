// Toppings ->
// Size ->
// Crust Type ->

function Pizza(toppings, size, crust) {
  this.toppings1 = toppings;
  this.size1 = size;
  this.crust1 = crust;

  this.cook = function () {
    console.log(
      `Pizza of size ${this.size1} with toppings: ${this.toppings1} and crust: ${this.crust1} is ready.`,
    );
  };
}

var customerOrder1 = new Pizza("capsicum", "medium", "pan");

customerOrder1.cook();

var customerOrder2 = new Pizza("capsicum", "large", "pan");
customerOrder2.cook();

// Classes

class MyClass {
  constructor() {}

  myfunct() {}
}
