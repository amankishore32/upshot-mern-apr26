const fs = require("fs");
console.log("Start");
// Normal way
// fs.readFile("f1.txt", (err, data) => {
//   if (err) {
//     return console.log("Error reading file" + err);
//   }
//   console.log("Data: " + data);
// });

// file operations using promises - Parallel Reading
// let filePromise1 = fs.promises.readFile("f1.txt");
// let filePromise2 = fs.promises.readFile("f2.txt");
// let filePromise3 = fs.promises.readFile("f3.txt");

// filePromise1
//   .then(function (data) {
//     console.log("Data: " + data);
//   })
//   .catch(function (err) {
//     console.log("Error: " + err);
//   });

// filePromise2
//   .then(function (data) {
//     console.log("Data: " + data);
//   })
//   .catch(function (err) {
//     console.error("Error: ", err);
//   });

// filePromise3
//   .then(function (data) {
//     console.log("Data: " + data);
//   })
//   .catch(function (err) {
//     console.error("Error: ", err);
//   });

// Serialised Reading

let filePromise1 = fs.promises.readFile("f1.txt");

filePromise1
  .then((data) => {
    console.log("Data: " + data);
    return fs.promises.readFile("f.txt");
  })
  .then((data) => {
    console.log("Data: " + data);
    return fs.promises.readFile("f3.txt");
  })
  .then((data) => {
    console.log("Data: " + data);
  })
  .catch((error) => {
    console.log("Error: " + error);
  });

console.log("End");
