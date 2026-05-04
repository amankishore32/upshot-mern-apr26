function parent() {
  var a = 20;

  function child() {
    console.log(a);
  }

  return child; // returning a Function
}

let result = parent(); // Assigning func returned to a variable
console.log(result); // I/O Function
result(); // Access the function returned
