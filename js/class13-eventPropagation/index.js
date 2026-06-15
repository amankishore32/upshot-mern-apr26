const grandParent = document.querySelector("#grandParent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const bodyEl = document.querySelector("body");
const htmlEl = document.querySelector("html");

// Bubbling Events

// htmlEl.addEventListener("click", () => {
//   console.log("HTML CLicked");
// });

// bodyEl.addEventListener("click", () => {
//   console.log("Body CLicked");
// });

// grandParent.addEventListener("click", () => {
//   console.log("GrandParent clicked");
// });

// parent.addEventListener("click", () => {
//   console.log("Parent clicked");
// });

// child.addEventListener("click", () => {
//   console.log("child clicked");
// });

// Capturing Events

// useCapture
grandParent.addEventListener(
  "click",
  (e) => {
    console.log("GrandParent clicked");
  },
  true,
);

parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked");
    e.stopPropagation();
  },
  true,
);

child.addEventListener(
  "click",
  (e) => {
    console.log("child clicked");
    e.stopPropagation();
  },
  true,
);
