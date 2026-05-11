// Find out all the even numbers from this array
let myNums = [1, 2, 5, 4, 7, 8, 10, 42, 57, 78];

function checkEven(num) {
  return num % 2 == 0;
}

const ans = myNums.filter(function (num) {
  return checkEven(num);
});
console.log(ans);
