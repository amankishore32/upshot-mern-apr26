const decrBtn = document.querySelector("#decr");
const incrBtn = document.querySelector("#incr");
const resetBtn = document.querySelector("#reset");
let countText = document.querySelector("#count");
let count = 0;
decrBtn.addEventListener("click", () => {
  count--;
  countText.textContent = count;
});

incrBtn.addEventListener("click", () => {
  count++;
  countText.textContent = count;
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countText.textContent = count;
});
