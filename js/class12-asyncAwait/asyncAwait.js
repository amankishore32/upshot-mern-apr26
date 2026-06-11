const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("This is resolved");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Greetings...");
  }, 2000);
});

// function resolvePromise() {
//   p1.then((res) => {
//     console.log(res);
//   });
//   console.log("Upshot");
// }

async function handlePromise() {
  console.log("Start");
  let data = await p1;
  console.log(data);
}

async function greet() {
  console.log("Greet started");
  let data2 = await p2;
  console.log(data2);
}

// resolvePromise();
handlePromise();
greet();
