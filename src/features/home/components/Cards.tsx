import 'primeicons/primeicons.css'

import React from 'react'

import { Card } from 'primereact/card'
import { Vidget } from './components/Vidget'

export const Cards = () => {
  const cardsWeather = [
    {
      id: 1,
      day: 'Mon',
      weather: 'Sunny',
      minTemperature: 3,
      maxTemperature: 8,
    },
    {
      id: 2,
      day: 'Tue',
      weather: 'Sunny',
      minTemperature: 5,
      maxTemperature: 8,
    },
    {
      id: 3,
      day: 'Wed',
      weather: 'Sunny',
      minTemperature: 2,
      maxTemperature: 6,
    },
    {
      id: 4,
      day: 'Thu',
      weather: 'Cloudy',
      minTemperature: 6,
      maxTemperature: 8,
    },
    {
      id: 5,
      day: 'Fri',
      weather: 'Cloudy',
      minTemperature: 2,
      maxTemperature: 7,
    },
    {
      id: 6,
      day: 'Sat',
      weather: 'Sunny',
      minTemperature: 3,
      maxTemperature: 8,
    },
    {
      id: 7,
      day: 'Sun',
      weather: 'Cloudy',
      minTemperature: 3,
      maxTemperature: 8,
    },
  ]

  return (
    <>
      <div className="weather-cards">
        {cardsWeather.map(({ id, day, weather, minTemperature, maxTemperature }) => (
          <Card
            key={id}
            style={{
              width: '9rem',
              marginBottom: '2em',
              marginTop: '2em',
              boxShadow: '0px 5px 20px 5px rgba(209, 209, 209, 0.5)',
              borderRadius: 15,
            }}
          >
            <h2>{day}</h2>
            <span className="material-symbols-outlined">{weather}</span>
            <div className="temperature">
              <h4>{minTemperature}°C</h4>
              <h4>{maxTemperature}°C</h4>
            </div>
          </Card>
        ))}
      </div>
      <Vidget />
    </>
  )
}
