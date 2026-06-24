const falsyValues = [false, 0, -0, "", null, undefined, NaN];
const truthyValues = [1, -1, "hello", true, {}, [], () => {}];

truthyValues.forEach((value) => {
  if (value) console.log(`${value} is truthy`);
  else console.log(`${value} is falsy`);
});

const response = "";
if (!response) {
  console.error("Error: empty");
}

function greet(name) {
  person = name || "Guest";
  console.log(`Hello ${person}`);
}

greet();
