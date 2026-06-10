// new Promise(function (resolve, reject) {});

// Heads -> 0.5  -> Success
// Tails -> 0.5  -> Failure
// Coin toss simulation

console.log("Start");

let tossPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const isHead = Math.random() >= 0.5; // 0 - 1 random number

    if (isHead) {
      resolve("We win!");
    } else {
      reject("We Lose");
    }
  }, 200);
});

console.log(tossPromise);

tossPromise.then(function (data) {
  console.log("Success: " + data);
});

tossPromise.catch(function (data1) {
  console.error("Error: " + data1);
});

tossPromise.finally(function () {
  console.log("Promise Complete");
});

console.log("End");
