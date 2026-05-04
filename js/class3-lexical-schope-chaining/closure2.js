function parent() {
  var a = 20;

  function child() {
    var b = 30;
    console.log("Your scrore is ", a);

    function child2() {
      console.log(b);
    }

    return child2;
  }

  return child;
}

let val1 = parent(); // Assign CHILD Function to val1 variable
console.log(val1); // Print the val1 variable
let val2 = val1(); // Execute val1
val2();
