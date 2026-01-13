import React from 'react'

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='search-container'>
        <input type="text" className='search-bar' placeholder='Search City...' />
      </div>
      <div className='weather-container'>
        <div>
          <h2>London</h2>
          <p>clear</p>
          <h2 style={{fontSize: "3rem"}}>16°C</h2>
        </div>
        <img src="https://placekittens.com/g/200/300" alt="weather icons" width={100} height={100} />
      </div>
      <div className='footer-container'>
        <p>Created by FaresCH</p>
      </div>
    </div>    
  )
}

export default WeatherApp