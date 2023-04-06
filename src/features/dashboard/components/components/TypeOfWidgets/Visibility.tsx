import React from 'react'

interface VisibilityProps {
  value: number
}

export const Visibility: React.FC<VisibilityProps> = ({ value }) => {
  function ValueOfVisibility() {
    let level

    if (value <= 14) {
      return (level = 'Very good')
    } else if (value >= 15 && value <= 20) {
      return (level = 'Good')
    } else if (value >= 21 && value <= 24) {
      return (level = 'Moderate')
    } else if (value >= 25 && value <= 28) {
      return (level = 'Bad')
    } else if (value >= 29) {
      return (level = 'Very bad')
    } else {
      return level
    }
  }

  return (
    <div className="visibility">
      <div className="visibility__head">
        <h2>Visibility</h2>
      </div>
      <div className="visibility__body">
        <h2>{value} km/h</h2>
        <h2>{ValueOfVisibility()} visibility</h2>
      </div>
    </div>
  )
}
