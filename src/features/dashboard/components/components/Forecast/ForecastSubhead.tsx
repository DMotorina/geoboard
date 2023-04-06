import React from 'react'

import { Button } from 'primereact/button'

interface ForecastSubheadProps {
  handlClickTempCelc: () => void
  handlClickTempFar: () => void
}

export const ForecastSubhead: React.FC<ForecastSubheadProps> = ({
  handlClickTempCelc,
  handlClickTempFar,
}) => {
  return (
    <div className="forecast__neck">
      <h2 style={{ marginLeft: '2.5%' }}>Weather forecast for the week</h2>
      <div style={{ marginRight: '2.5%', width: '12%' }}>
        <Button
          style={{
            marginRight: '10%',
            fontFamily: 'Merriweather, serif',
          }}
          onClick={handlClickTempCelc}
        >
          °C
        </Button>
        <Button style={{ fontFamily: 'Merriweather, serif' }} onClick={handlClickTempFar}>
          °F
        </Button>
      </div>
    </div>
  )
}
