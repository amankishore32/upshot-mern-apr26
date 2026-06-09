const fs = require("fs");

console.log("Start");

// Synchronous

// let data1 = fs.readFileSync("f1.txt");
// console.log("Data: " + data1);

// let data2 = fs.readFileSync("f2.txt");
// console.log("Data: " + data2);

// let data3 = fs.readFileSync("f3.txt");
// console.log("Data: " + data3);

// Asynchronous

// fs.readFile("f1.txt", (err, data) => {
//   if (err) {
//     return console.log("Error", err);
//   }
//   console.log("Data: " + data);
// });

// console.log("End");

// Parallel + Asynchronous

// fs.readFile("f1.txt", (err, data) => {
//   if (err) {
//     return console.log("Error", err);
//   }
//   console.log("Data: " + data);
// });

// fs.readFile("f2.txt", (err, data) => {
//   if (err) {
//     return console.log("Error", err);
//   }
//   console.log("Data: " + data);
// });

// fs.readFile("f3.txt", (err, data) => {
//   if (err) {
//     return console.log("Error", err);
//   }
//   console.log("Data: " + data);
// });

// console.log("End");

// Reading files asynchronously in serial fashion

function cb1(err, data) {
  if (err) {
    return console.log("Error: ", err);
  }
  console.log("Data: " + data);
  fs.readFile("f2.txt", cb2);
}

function cb2(err, data) {
  if (err) {
    return console.log("Error: ", err);
  }
  console.log("Data: " + data);
  fs.readFile("f3.txt", cb3);
}

function cb3(err, data) {
  if (err) {
    return console.log("Error: ", err);
  }
  console.log("Data: " + data);
}

fs.readFile("f1.txt", cb1);
console.log("End");


// SYnchronous -> blocking code
// Async - non-blocking code

// Serial - excuting 1 by 1 - in a particular serial 123 
// Parallel - executing prallely - no serial 321, 231, 123, - Fastetst output