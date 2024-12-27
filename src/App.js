import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = "1a40fda6b951750c9c306d5246f8e42a"; // Your OpenWeatherMap API Key
    if (city.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching the weather:", error);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
