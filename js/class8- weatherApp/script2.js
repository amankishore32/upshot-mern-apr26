let toys = {
  toy1: { name: "Teddy Bear", color: "brown", isAvailable: true, qty: 2 },
  toy2: { name: "car", color: "red", isAvailable: false, qty: 0 },
  toy3: { name: "doll", color: "pink", isAvailable: true, qty: 4 },
};

// Cover it into JSON data
let toysJson = JSON.stringify(toys); // To send over the network = Request

console.log(toysJson);

// Covert it into Javascript Object
let toysObj = JSON.parse(toysJson);  // To recieve anything from network and make it Javascript processable = Response

console.log(toysObj);
