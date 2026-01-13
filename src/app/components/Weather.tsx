import React from 'react'
import Image from 'next/image'

const Weather = () => {
  return (
    <div className='weather-container'>
        <div>
          <h2>London</h2>
          <p>clear</p>
          <h2 style={{fontSize: "3rem"}}>16°C</h2>
        </div>
        <Image src="/images/weather-icons/clear.png" alt='weather icon' width={100} height={100} />
    </div>
  )
}

export default Weather