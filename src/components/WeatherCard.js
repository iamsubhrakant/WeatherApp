import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <h3>{Math.round(weather.main.temp)}°C</h3>
      <p>{weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
      />
    </div>
  );
}

export default WeatherCard;
