import React from 'react'

import { Knob } from 'primereact/knob'

interface UVIndexProps {
  value: number
}

export const UVIndex: React.FC<UVIndexProps> = ({ value }) => {
  return (
    <div className="UV">
      <div className="UV__head">
        <h2>UV Index</h2>
      </div>
      <div className="UV__body">
        <Knob value={value} min={0} max={12} />
      </div>
    </div>
  )
}
