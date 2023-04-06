import React from 'react'

interface HumidityProps {
  value: number
}

export const Humidity: React.FC<HumidityProps> = ({ value }) => {
  function ValueOfHumidity() {
    let level

    if (value >= 61) {
      return (level = 'Miserable')
    } else if (value >= 56 && value <= 60) {
      return (level = 'Yucky')
    } else if (value >= 51 && value <= 55) {
      return (level = 'Sticky')
    } else if (value >= 46 && value <= 50) {
      return (level = 'Muggy')
    } else if (value >= 41 && value <= 45) {
      return (level = 'Moderate Breeze')
    } else if (value <= 40) {
      return (level = 'Pleasant')
    } else {
      return level
    }
  }

  return (
    <div className="humidity">
      <div className="humidity__head">
        <h2>Humidity</h2>
      </div>
      <div className="humidity__body">
        <h2>{value} %</h2>
        <h2>{ValueOfHumidity()}</h2>
      </div>
    </div>
  )
}
