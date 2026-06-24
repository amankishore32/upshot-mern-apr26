let zoo = {
  name: "Vantara",
  location: ["Jamnagar", "Gujrat"],
  animals: [
    {
      species: "Lion",
      food: "meat",
    },
    {
      species: "Panda",
      food: "Leaves",
    },
  ],
};

let shallowCopy = { ...zoo };
// console.log(copy);

copy.location = ["Kerela", "India"];

// console.log(zoo);
// console.log(copy);

copy.animals[1].food = "Bamboo";

console.log(zoo.animals[1].food);

console.log(zoo);
console.log(copy);
