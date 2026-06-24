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

let stringObj = JSON.stringify(zoo); // Flattening of Object
let deepCopy = JSON.parse(stringObj);

deepCopy.location = ["Kerela", "India"];

deepCopy.animals[1].food = "Bamboo";

console.log(zoo.animals[1].food);

console.log(zoo);
console.log(deepCopy);
