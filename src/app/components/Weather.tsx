import React from "react";
import Image from "next/image";
import { WeatherData } from "../types";
import WeatherIcon from "./WeatherIcon";

interface WeahterProps {
  weatherData: WeatherData
}

const Weather = ({weatherData}: WeahterProps) => {
    const current = weatherData?.list[0]
  return (
    <div className="weather-container">
      <div>
        <h2>{weatherData.city.name}</h2>
        <h3>{weatherData.city.country}</h3>
        <p>{current.weather[0].description}</p>
        <h2 style={{ fontSize: "3rem" }}>{Math.round(current.main.temp)}&deg;C</h2>
      </div>
      <WeatherIcon weatherId={current?.weather[0].id || 800} />
    </div>
  );
};

export default Weather;
