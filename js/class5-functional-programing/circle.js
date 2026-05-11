// Calculate area, circumference & diameter.
// We need to output these 3 values for each circle in an array

let myRadiusArr = [2, 3, 4, 5, 8];

function displayCircleDetails(radiusArr, cb) {
  let result = [];
  for (r of radiusArr) {
    result.push(cb(r));
  }
  return result;
}

function getArea(radius) {
  return 3.14 * radius * radius;
}

function getCircumference(radius) {
  return 2 * 3.14 * radius;
}

function getDiameter(radius) {
  return 2 * radius;
}

let areaArr = displayCircleDetails(myRadiusArr, getArea);
console.log("Area of all the circle: ", areaArr);

console.log(
  "Circumference arrray: ",
  displayCircleDetails(myRadiusArr, getCircumference),
);
