import '../style.sass'

import React from 'react'
import { useAppSelector } from '@/hooks'

import { WiCloud } from 'react-icons/wi'

export const Location = () => {
  const location = useAppSelector((state) => state.dashboard.data?.location)

  const temper = useAppSelector((state) => state.dashboard.data?.temperature)

  const now = new Date()

  const hoursAndMinutes = now.getHours() + ':' + now.getMinutes()

  return (
    <div className="location">
      <div className="location__head">
        <div className="field col-12 md:col-4" style={{ marginTop: '5%' }}></div>
      </div>
      <div className="location__body">
        <WiCloud style={{ fontSize: '300', color: '#696969' }} />
        <h1 style={{ fontSize: '13ex', fontWeight: 'lighter' }}>
          {Math.floor(Number(temper?.celsius))}°C
        </h1>
        <h2>
          {location?.name}, {location?.country}
        </h2>
        <h2>
          {location?.day_of_week}, {hoursAndMinutes}
        </h2>
      </div>
    </div>
  )
}
