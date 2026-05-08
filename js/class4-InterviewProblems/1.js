// ConvertTemperature(temp, unit) 

// 1. Convert the Celcius to Fahrenheit and vice-versa
// 2. Return the converted temprature

// e.g. convertTemperature(100, “C”) → 212F.

// Boilerplate code

function CelToFah(celsius) {
	return celsius * 9 / 5 + 32;
}

function FahToCel(fahrenheit){
	return (farenheit - 32) * 5 / 9;
}

function convertTemperature(temp, unit){
	// Write code here
}

console.log(convertTemperature(100, "C")); // "212F"
console.log(convertTemperature(32, "F")); // "0C"