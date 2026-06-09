// Aynchronous

console.log("Start");

function greet() {
  console.log("Helo JS");
}

function calc() {
  //   for (i = 0; i < 1000000000; i++) {}
  console.log("Calculated");
}

greet();
setTimeout(calc, 0);
console.log("End");
