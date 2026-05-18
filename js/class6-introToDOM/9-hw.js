/**
 *      Write the function to give sum of the array using reduce()
 */

const numbers = [4, 45, -5, 65, 85, -1];

function sumArray(numbers) {}

/**
 *      Write the function to give sum of the array using reduce()
 */

const numbers = [4, 45, -5, 65, 85, -1];

function sumArray(numbers) {
  return numbers.reduce((sum, number) => {
    return (sum = sum + number);
  }, 0);
}

console.log(sumArray(numbers));
