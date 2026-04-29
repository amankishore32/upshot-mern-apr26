// console.log("Hello, Javascript");

// console.log(2 + 5);

// Datatypes
var a = 20;
console.log(a);

var b = "Javascript";
b = 35;
console.log(b);

var c = true;
console.log(c);

var d = 1.123;
console.log(d);

var e = "J";
console.log(e);

var f = null;
console.log(f);

var g;
// g = undefined;
console.log(g);

console.log("---------------------------");
//  Check data type of variable
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(typeof e, e);
console.log(typeof f, f);
console.log(typeof g, g);

console.log("-------------------");
var score = 100;
// score = "new score";

var score = "Javascript";
console.log(score);

let aa = 200;
aa = "javascript";
console.log(aa);

// let a = 100;
// console.log(a);

// const x = "Foo";
// x = "bar";
// console.log(x);

console.log("-------------------- Arrays --------------");

let arr = [5, 6, 7, 8, 9];
console.log(arr);
//          0   1     2    3     4          5    6
let data = [2, "JS", true, null, undefined, 10, "Sadiqu"];
console.log(data);

console.log(data.length);

console.log("Data at 2nd Index: ", data[2]);

let cars = ["Audi", "BMW", "Toyota"];

// Add to the array
cars.push("Honda"); // Add/Append anything to the end of the array
console.log("Modified Array: ", cars);

// remove element from array
cars.pop(); // Remove last element of the array
console.log("Array post Removed element: ", cars);

// Add element at start
cars.unshift("Honda");
console.log("Add element at start: ", cars);

// Remove element from start
cars.shift();
console.log("Remove 1st element from array", cars);

// Delete element based on the index
// .splice(startIndex, deleteCount)
let arr2 = [10, 20, 30, 40, 50];
let result = arr2.splice(2, 2);
console.log("Index base Deletion: ", arr2);
console.log("Spliced removed elements: ", result);

// Add element based on index - MUTATION
// .splice(startIndex, deleteCount, val1, val2, val3, ....)
console.log("Current Array: ", arr2);
arr2.splice(2, 0, 30, 40);
console.log("Inserted Array: ", arr2);

// NON-Mutating
console.log("Fresh array: ", arr2);
let result2 = arr2.toSpliced(2, 0, 25);
console.log("Current rray: ", arr2);
console.log("Result2: ", result2);
