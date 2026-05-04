function funcA(m, n) {
  return m * n;
}

function funcB(m, n) {
  return funcA(m, n);
}

function getResult(val1, val2) {
  return funcB(val1, val2);
}

var result = getResult(2, 3);

console.log(result);
