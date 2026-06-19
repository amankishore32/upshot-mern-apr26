let x = 10;
class Pizza {
  static totalPizza = 0;

  constructor(toppings1, size1, crust1) {
    this.crust = crust1;
    this.size = size1;
    this.toppings = toppings1;
    Pizza.totalPizza++;
  }

  static getPizzaCount() {
    console.log(`Total pizzas baked = ${Pizza.totalPizza}`);
  }

  cook() {
    return `Pizza with ${this.toppings} of size ${this.size} and crust ${this.crust} is ready`;
  }
}

let customerOrder1 = new Pizza(["cappsicum", "olives"], "small", "thin");
let customerOrder2 = new Pizza(["cappsicum", "olives"], "medium", "thin");

// console.log(customerOrder1);

// console.log(customerOrder2);

class Meal extends Pizza {
  static totalMeals = 0;
  constructor(toppings, pizzaSize, pizzaCrust, drink) {
    super(toppings, pizzaSize, pizzaCrust); // Access the Pizza(Parent class)
    this.drink = drink;
    Meal.totalMeals++;
  }

  sip() {
    return `${this.drink}`;
  }

  static getMealCount() {
    console.log(`Total Meals made = ${Meal.totalMeals}`);
  }

  deliverMeal() {
    let readyDrink = this.sip();
    let readyPizza = super.cook();
    console.log(`Meal with ${readyPizza} and ${readyDrink} is served.`);
  }
}

let meal1 = new Meal(["onions, tomato"], "medium", "thick", "coke");

Pizza.getPizzaCount();
Meal.getMealCount();
