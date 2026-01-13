import React from 'react'
import Search from './components/Search'
import Weather from './components/Weather'
import CreatedBy from './components/CreatedBy'

const WeatherApp = () => {
  return (
    <div className='container'>
      <Search />
      <Weather />
      <CreatedBy />
    </div>    
  )
}

export default WeatherApp