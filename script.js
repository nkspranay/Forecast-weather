async function retreiveWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'c9c0fd7402361850f7cd85e002d4c00d' ; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
  
      const weather = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡️ Temp: ${data.main.temp} °C</p>
        <p>🌥️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
  }
  