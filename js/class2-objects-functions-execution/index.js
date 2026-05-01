// Object k-v pairs for any Entity

// Entity - properties, behaviours

// car
// person
// city

let car = {
  color: "red",
  topSpeed: 250,
  company: "audi",
  name: "r8",
};

// console.log(car);

let captain = {
  name: "Steve Roger",
  age: 105,
  friends: ["Bucky", "Bruce Banner", "Tony Stark"],
  address: {
    country: "USA",
    city: {
      name: "Brooklyn",
      pincode: 123456,
    },
  },
  isAvenger: true,
};

// Access the props -> Dot Notation

console.log(captain.name);
console.log(captain.friends);

console.log(captain.address.city.name);

// Access to props -> Bracket notation

console.log(captain["isAvenger"]);

console.log(captain["address"]["country"]);

//Add a property
captain.movies = ["infinity war", "winter soldier"];

console.log(captain);

captain.cars = {
  car1: "audi",
  car2: "bmw",
};

console.log(captain);

// Delete any prop

delete captain.cars;

console.log(captain);
