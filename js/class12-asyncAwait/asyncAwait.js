const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("This is resolved");
  }, 10000);
});

function greet() {
  setTimeout(() => {
    console.log("Bye");
  }, 5000);
}

function resolvePromise() {
  p1.then((res) => {
    console.log(res);
  });
  console.log("Upshot");
}

let data = "";
async function handlePromise() {
  console.log("Start");
  data = await p1;
  console.log("Hello");
}

// greet();
// resolvePromise();
handlePromise();
console.log(data);
