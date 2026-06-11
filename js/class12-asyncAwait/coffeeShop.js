function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") resolve("Order taken");
    else reject("Cannot take order for this drink");
  });
}

function processOrder(orderPlaced) {
  return new Promise(function (resolve) {
    resolve(`${orderPlaced} and server`);
  });
}

function generateBill() {
  return new Promise(function (resolve) {
    resolve("bill generated");
  });
}

// placeOrder("coffee")
//   .then((orderStatus) => {
//     console.log(orderStatus);
//     return orderStatus;
//   })
//   .then((orderStatus) => {
//     let orderReady = processOrder(orderStatus);
//     return orderReady;
//   })
//   .then((orderReady) => {
//     console.log(orderReady);
//     let bill = generateBill();
//     return bill;
//   })
//   .then((bill) => {
//     console.log(bill);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

async function serverOrder() {
  try {
    let orderplaced = await placeOrder("coffee");
    console.log(orderplaced);
    let orderReady = await processOrder(orderplaced);
    console.log(orderReady);
    let bill = await generateBill();
    console.log(bill);
  } catch (error) {
    console.error(error);
  }
}

serverOrder();
