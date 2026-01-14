import React from 'react'
import Image from 'next/image';

function getWeatherIcon(weatherId: number) {
    if (weatherId < 300) return "/images/weather-icons/storm.png";
    if (weatherId < 500) return "/images/weather-icons/drizzle.png";
    if (weatherId < 600) return "/images/weather-icons/rain.png";
    if (weatherId < 700) return "/images/weather-icons/snow.png";
    if (weatherId < 800) return "/images/weather-icons/fog.png";
    if (weatherId === 800) return "/images/weather-icons/clear.png";
    if (weatherId === 801) return "/images/weather-icons/partlycloudy.png";
    if (weatherId <= 805) return "/images/weather-icons/mostlycloudy.png";
    return "/images/weather-icons/clear.png"; // default
  }

  interface WeatherIdProps {
    weatherId: number;
}

const WeatherIcon = ({weatherId}: WeatherIdProps) => {

  return (
    <Image src={getWeatherIcon(weatherId)} alt='weather icon' width={100} height={100} />
  )
}

export default WeatherIcon