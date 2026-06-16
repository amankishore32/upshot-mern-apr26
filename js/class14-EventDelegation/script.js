const div = document.querySelector("div");

div.addEventListener("click", function (event) {
  console.log(event);
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.innerText);
  }
});
