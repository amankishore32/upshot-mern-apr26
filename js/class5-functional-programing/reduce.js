let cartPrice = [1, 2, 3, 4, 5];

// function cartTotal(nums) {
//   let sum = 0; // Accumulator

//   for (num of nums) {
//     sum = sum + num;
//   }

//   return sum;
// }

// By default if NO accumulator value is provided 1st value is assigned.
let finalAmount = cartPrice.reduce((acc, value) => acc + value);
console.log(finalAmount);
