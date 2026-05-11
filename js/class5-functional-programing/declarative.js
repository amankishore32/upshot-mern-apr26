// write the func to calculate the square of the array using new array

let myArr = [1, 2, 3, 4];

function square(a) {
  return a * a;
}

// let ans = myArr.map((num) => square(num));

let ans = myArr.map(function (val) {
  return square(val);
});
console.log(ans);

// .map()
