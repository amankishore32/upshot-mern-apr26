const input1 = document.querySelector("input");

function debounce(func, waitTime) {
  let expire;
  return function executeFunction() {
    const later = function () {
      clearTimeout(expire);
      func();
    };
    clearTimeout(expire);
    expire = setTimeout(later, waitTime);
  };
}

const processInput = debounce(printLog, 250);

function printLog() {
  console.log("Key Pressed");
}


input1.addEventListener("keypress", processInput);
