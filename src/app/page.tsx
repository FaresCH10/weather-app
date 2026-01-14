"use client"
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import CreatedBy from "./components/CreatedBy";
import { WeatherData } from "./types";
import HourlyForecast from "./components/HourlyForecast";

const WeatherApp = () => {

  const [city, setCity] = useState<string>("London")
  const [weatherData,setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false)
 
  useEffect(() => {
    const fetchWeather = async () => {
      

      try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
        setLoading(true)
        setError(null)
        setWeatherData(null)

        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("City not found")
        }

        const data = await response.json()
        
        setWeatherData(data)
      } catch (err) {
        setError("Failed to fetch weather data. Please try again")
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [city])

  return (
    <div className="container">
      <Search setCity={setCity} />
      {loading && <p>Loading....</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
      {weatherData && <Weather weatherData={weatherData} />}
      {weatherData && <HourlyForecast list={weatherData.list} />}
      
      <CreatedBy />
    </div>
  );
};

export default WeatherApp;
