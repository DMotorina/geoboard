import React from 'react'

interface WindStatusProps {
  data: number
}

export const WindStatus: React.FC<WindStatusProps> = ({ data }) => {
  const value = Math.floor(data)

  function ValueOfWeather() {
    let level

    if (value < 1) {
      return (level = 'Calm')
    } else if (value >= 1 && value <= 5) {
      return (level = 'Light Air')
    } else if (value >= 6 && value <= 11) {
      return (level = 'Light Breeze')
    } else if (value >= 12 && value <= 19) {
      return (level = 'Gentle Breeze')
    } else if (value >= 20 && value <= 28) {
      return (level = 'Moderate Breeze')
    } else if (value >= 29 && value <= 38) {
      return (level = 'Fresh Breeze')
    } else if (value >= 38 && value <= 49) {
      return (level = 'Strong Breeze')
    } else if (value >= 50 && value <= 61) {
      return (level = 'Near Gale')
    } else if (value >= 62 && value <= 74) {
      return (level = 'Gale')
    } else if (value >= 75 && value <= 88) {
      return (level = 'Strong Gale')
    } else if (value >= 89 && value <= 102) {
      return (level = 'Storm')
    } else if (value >= 103 && value <= 117) {
      return (level = 'Violent Storm')
    } else if (value >= 118) {
      return (level = 'Hurricane')
    } else {
      return level
    }
  }

  return (
    <div className="wind">
      <div className="wind__head">
        <h2>Wind Status</h2>
      </div>
      <div className="wind__body">
        <h2>{value} km/h</h2>
        <h3>{ValueOfWeather()}</h3>
      </div>
    </div>
  )
}
