import React from 'react'

import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io'

interface SunriseAndSunsetProps {
  sunrise: string
  sunset: string
}

export const SunriseAndSunset: React.FC<SunriseAndSunsetProps> = ({ sunrise, sunset }) => {
  return (
    <div className="RiseAndSet">
      <div className="RiseAndSet__head">
        <h2>Sunrise & Sunset</h2>
      </div>
      <div className="RiseAndSet__body">
        <h2>
          <IoIosArrowDropupCircle
            style={{
              color: '#ffd400',
              marginBottom: '-5%',
              marginRight: '5%',
            }}
          />
          {sunrise}
        </h2>
        <h2>
          <IoIosArrowDropdownCircle
            style={{
              color: '#ffd400',
              marginBottom: '-5%',
              marginRight: '5%',
            }}
          />
          {sunset}
        </h2>
      </div>
    </div>
  )
}
