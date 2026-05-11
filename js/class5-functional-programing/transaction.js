const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrToUsd = 95.26;

// use map method and show the amounts in USD

let UDSvalues = transactions.map(function (amount) {
  return displayUSDValue(amount);
});
console.log(UDSvalues);

function displayUSDValue(transactionAmount) {
  return inrToUsd * transactionAmount;
}
