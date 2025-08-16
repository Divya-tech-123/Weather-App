async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "2563ca38a38f5685c71a7656243f97c4"; // 🔹 Replace with your OpenWeather API Key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").innerHTML = `<p>❌ City not found!</p>`;
      return;
    }

    const weatherHtml = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><b>${data.weather[0].main}</b> - ${data.weather[0].description}</p>
      <h3>🌡 ${data.main.temp} °C</h3>
      <div class="weather-details">
        <p>Feels Like: ${data.main.feels_like} °C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      </div>
    `;

    document.getElementById("weatherResult").innerHTML = weatherHtml;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>⚠️ Error fetching data</p>`;
  }
}
