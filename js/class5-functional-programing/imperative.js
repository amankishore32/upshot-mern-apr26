// write the func to calculate the square of the array using new array

let myArr = [1, 2, 3, 4];

function square(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }

  return result;
}

let ans = square(myArr);
console.log(ans);
