import React from 'react'

import { RiTempColdFill } from 'react-icons/ri'

interface MinMaxTempProps {
  minC: number
  maxC: number
}

export const MinMaxTemp: React.FC<MinMaxTempProps> = ({ minC, maxC }) => {
  return (
    <div className="MinMaxTemp">
      <div className="MinMaxTemp__head">
        <h2>Min & Max temperature</h2>
      </div>
      <div className="MinMaxTemp__body">
        <h2>
          <RiTempColdFill
            style={{
              color: '#189eff',
              marginBottom: '-3%',
              marginRight: '5%',
            }}
          />
          {minC}°C
        </h2>
        <h2>
          <RiTempColdFill
            style={{
              color: '#ff0000',
              marginBottom: '-3%',
              marginRight: '5%',
            }}
          />
          {maxC}°C
        </h2>
      </div>
    </div>
  )
}
