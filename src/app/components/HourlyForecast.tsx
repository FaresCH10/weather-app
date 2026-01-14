import React from "react";
import { WeatherData } from "../types";
import WeatherIcon from "./WeatherIcon";

interface HourlyForecastProps {
  list: WeatherData["list"];
}

const HourlyForecast = ({ list }: HourlyForecastProps) => {
  return (
    <div className="hourly-container">
      <h3>Next 24 hours forecast</h3>

      <div className="hourly-grid">
        {list.map((item) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div key={item.dt} className="hour">
              <p>{time}</p>
              {/* <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              /> */}
              <WeatherIcon weatherId={item.weather[0].id} />
              <p>{Math.round(item.main.temp)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
