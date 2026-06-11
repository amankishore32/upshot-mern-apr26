const p1 = new Promise(function (resolve, reject) {
  resolve("This is resolved");
});

async function getData() {
  return true;
}

let data = getData();

console.log(data);

// Number(11);
