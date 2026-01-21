const searchBtn = document.getElementById("searchBtn");

function WeatherApp() {
  const cityName = document.getElementById("cityName");
  const storeName =
    cityName.value.slice(0, 1).toUpperCase() +
    cityName.value.slice(1).toLowerCase();
  let resultDiv = document.getElementById("placeholderText");
  try {
    const weatherApi = fetch(
     `https://p2pclouds.up.railway.app/v1/learn/weather?city=${encodeURIComponent(storeName)}`
    );

    if (!storeName || storeName.includes(" ")) {
      alert("Enter the City Name Correctly.!!");
      return;
    }

    weatherApi
      .then((weatherdata) => {
        return weatherdata.json();
      })
      .then((weatherdata) => {
        resultDiv.innerHTML = `<strong style="font-size: 16px">${storeName}</strong>
                               \n <strong>Temperature: </strong> ${weatherdata.current.temp_c} °C
                               \n <strong>Feels Like: </strong> ${weatherdata.current.feelslike_c} °C
                                 \n <strong>Condition: </strong> ${weatherdata.current.condition.text}
                                 \n <strong>Humidity: </strong> ${weatherdata.current.humidity}%
                                 \n <strong>Wind Pressure: </strong> ${weatherdata.current.wind_kph}Km/h `;
        
      });
  } catch (error) {
    console.log(error);
  }
}
searchBtn.onclick = WeatherApp;
