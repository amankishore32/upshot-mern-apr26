// ConvertTemperature(temp, unit)

// 1. Convert the Celcius to Fahrenheit and vice-versa
// 2. Return the converted temprature

// e.g. convertTemperature(100, “C”) → 212F.

// Boilerplate code

function CelToFah(celsius) {
  return (celsius * 9) / 5 + 32;
}

function FahToCel(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertTemperature(temp, unit) {
  // Write code here
  if (unit === "C") {
    return CelToFah(temp) + "F";
  } else if (unit === "F") {
    return FahToCel(temp) + "C";
  } else {
    return "Invalid Input, Please enter F or C";
  }
}

console.log(convertTemperature(100, "C")); // "212F"
console.log(convertTemperature(32, "F")); // "0C"
console.log(convertTemperature(32, "G"));
