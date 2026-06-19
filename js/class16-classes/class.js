let x = 10;
class Pizza {
  constructor(toppings1, size1, crust1) {
    this.crust = crust1;
    this.size = size1;
    this.toppings = toppings1;
  }

  cook() {
    console.log(
      `Pizza with ${this.toppings} of size ${this.size} and crust ${this.crust} is ready`,
    );
  }
}

let customerOrder1 = new Pizza(["cappsicum", "olives"], "small", "thin");
let customerOrder2 = new Pizza(["cappsicum", "olives"], "medium", "thin");

console.log(customerOrder1);

console.log(customerOrder2);

class Drink {
  sip() {
    console.log("Sipping");
  }
}

let drink1 = new Drink();
let drink2 = new Drink();

console.log(drink1);
console.log(drink2);
