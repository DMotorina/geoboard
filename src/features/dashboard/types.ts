export interface Dashboard {
  temperature_scale: string
  location: Location
  temperature: Temperature
  condition: Condition
  forecast: [Forecast]
  widgets: [Widgets]
}

interface Location {
  name: string
  region: string
  country: string
  date: string
  time: string
  day_of_week: string
}

interface Temperature {
  celsius: number
  fahrenheit: number
}

interface Condition {
  status: string
  icon: string
}

interface Forecast {
  date: string
  day_of_week: string
  temperature: {
    max: {
      celsius: number
      fahrenheit: number
    }
    min: {
      celsius: number
      fahrenheit: number
    }
  }
  condition: {
    status: string
    icon: string
  }
}

interface Widgets {
  uuid: string
  widget_type: string
  x: number
  y: number
  width: number
  height: number
  data: {
    value: number
  }
}
