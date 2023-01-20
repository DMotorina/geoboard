import '../style.sass'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import React from 'react'

import { Responsive, WidthProvider } from 'react-grid-layout'

import { Card } from 'primereact/card'
import { useAppSelector } from '@/hooks'

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
        rowHeight={190}
        width={1000}
      >
        {widgets?.map(({ data, uuid, widget_type }) => (
          <Card key={uuid}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2>{widget_type}</h2>
              <span className="material-symbols-outlined">settings</span>
            </div>
            <h2 style={{ lineHeight: '1.5' }}>{data.value}</h2>
          </Card>
        ))}
      </ResponsiveGridLayout>
    </div>
  )
}
