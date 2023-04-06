import '../style.sass'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import React from 'react'

import { Responsive, WidthProvider } from 'react-grid-layout'

import { Card } from 'primereact/card'
import { useAppSelector } from '@/hooks'

import { UVIndex } from './components/TypeOfWidgets/UVIndex'
import { WindStatus } from './components/TypeOfWidgets/WindStatus'
import { SunriseAndSunset } from './components/TypeOfWidgets/SunriseAndSunset'
import { Humidity } from './components/TypeOfWidgets/Humidity'
import { Visibility } from './components/TypeOfWidgets/Visibility'
import { MinMaxTemp } from './components/TypeOfWidgets/MinMaxTemp'

const layout = [
  { i: 'UV index', x: 0, y: 0, w: 1, h: 1 },
  { i: 'Wind Status', x: 1, y: 0, w: 1, h: 1 },
  { i: 'Sunrise & Sunset', x: 2, y: 0, w: 1, h: 1 },
  { i: 'Humidity', x: 3, y: 0, w: 1, h: 1 },
  { i: 'Visibility', x: 4, y: 0, w: 1, h: 1 },
  { i: 'Max & Min temperature', x: 5, y: 0, w: 1, h: 1 },
]

const ResponsiveGridLayout = WidthProvider(Responsive)

export const Widgets = () => {
  const widgets = useAppSelector((state) => state.dashboard.data?.widgets)

  return (
    <div className="widgets">
      <h2 style={{ marginLeft: '2.5%' }}> Today`s Hightlights </h2>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={200}
        width={600}
      >
        {widgets?.map(({ data, uuid, widget_type }) => (
          <Card key={uuid} className="widget-cards">
            <div className="card">
              {widget_type === 'uv_index' ? <UVIndex value={data.uv_index} /> : null}
              {widget_type === 'wind_status' ? <WindStatus data={data.speed} /> : null}
              {widget_type === 'sunrise_sunset' ? (
                <SunriseAndSunset sunrise={data.sunrise} sunset={data.sunset} />
              ) : null}
              {widget_type === 'humidity' ? <Humidity value={data.value} /> : null}
              {widget_type === 'visibility' ? <Visibility value={data.value} /> : null}
              {widget_type === 'min_max_temperature' ? (
                <MinMaxTemp minC={data.min.celsius} maxC={data.max.celsius} />
              ) : null}
            </div>
          </Card>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}
