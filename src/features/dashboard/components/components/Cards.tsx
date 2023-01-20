import React from 'react'

import { useAppSelector } from '@/hooks'

import { Card } from 'primereact/card'
import { Image } from 'primereact/image'

interface CardsProps {
  temp: boolean
}

export const Cards: React.FC<CardsProps> = ({ temp }) => {
  const forecast = useAppSelector((state) => state.dashboard.data?.forecast)

  return (
    <>
      {temp ? (
        <div className="forecast__body">
          {forecast?.map(({ date, day_of_week, condition, temperature }) => (
            <Card key={date} className="cards">
              <h2> {day_of_week.slice(0, 3)} </h2>
              <Image src={condition?.icon} width="auto" style={{ marginLeft: '20%' }} />
              <div className="temperature">
                <h4>{Math.floor(temperature?.min.fahrenheit)} °C </h4>
                <h4 style={{ color: '#808080' }}>{Math.floor(temperature?.max.fahrenheit)} °C </h4>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="forecast__body">
          {forecast?.map(({ date, day_of_week, condition, temperature }) => (
            <Card key={date} className="cards">
              <h2> {day_of_week.slice(0, 3)} </h2>
              <Image src={condition?.icon} width="auto" style={{ marginLeft: '20%' }} />
              <div className="temperature">
                <h4>{Math.floor(temperature?.min.celsius)} °C </h4>
                <h4 style={{ color: '#808080' }}>{Math.floor(temperature?.max.celsius)} °C </h4>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}
