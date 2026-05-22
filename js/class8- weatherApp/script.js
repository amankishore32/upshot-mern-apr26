// User Inputs/Events
const form = document.querySelector("form");
const userLocation = document.querySelector(".searchField");

// UI views
const temp = document.querySelector(".temp");
const city = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const icon = document.querySelector(".weather_condition img");
const weather = document.querySelector(".weather_condition span");

form.addEventListener("submit", search);

let targetLoc = "London";
function search(e) {
  e.preventDefault(); // Preventing the page to submit.
  //   console.log("Form submitted");
  targetLoc = userLocation.value;
  //   console.log(targetLoc);
  fetchData(targetLoc);
}

async function fetchData(targetLoc) {
  try {
    // Inject dynamic data between string using template literals
    const endpoint = `http://api.weatherapi.com/v1/current.json?key=e5e8b1826cdb4bd1b64152553262105&q=${targetLoc}&aqi=yes`;
    let response = await fetch(endpoint);
    // console.log("Response: ", response);
    let data = await response.json();
    // console.log("Data: ", data);

    let currTemp = data.current.temp_c;
    let currCity = data.location.name;
    let currDate = data.location.localtime;
    let currIcon = data.current.condition.icon;
    let currCondition = data.current.condition.text;
    updateUI(currTemp, currCity, currDate, currIcon, currCondition);
  } catch (error) {
    alert("Incorrect City name. Provide a valid location.");
    console.log("Something went wrong, ", error);
  } finally {
    userLocation.value = "";
  }
}

function updateUI(currTemp, currCity, currDate, currIcon, currCondition) {
  temp.innerText = currTemp;
  city.innerText = currCity;
  dateField.innerText = currDate;
  icon.src = currIcon;
  weather.innerText = currCondition;
}

fetchData(targetLoc);
