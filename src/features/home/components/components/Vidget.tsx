import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'

import { Card } from 'primereact/card'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const layout = [
  { i: 'UV index', x: 0, y: 0, w: 1, h: 1 },
  { i: 'Wind Status', x: 1, y: 0, w: 1, h: 1 },
  { i: 'Sunrise & Sunset', x: 2, y: 0, w: 1, h: 1 },
  { i: 'Humidity', x: 3, y: 0, w: 1, h: 1 },
  { i: 'Visibility', x: 4, y: 0, w: 1, h: 1 },
  { i: 'Max & Min temperature', x: 5, y: 0, w: 1, h: 1 },
]

const ResponsiveGridLayout = WidthProvider(Responsive)

export const Vidget = () => {
  const staticVidgets = [
    {
      name: 'UV index',
      value: 1,
    },
    {
      name: 'Wind Status',
      value: 2,
    },
    {
      name: 'Sunrise & Sunset',
      value: '07:02 16:20',
    },
    {
      name: 'Humidity',
      value: 8,
    },
    {
      name: 'Visibility',
      value: '10 km',
    },
    {
      name: 'Max & Min temperature',
      value: '7 9',
    },
  ]

  return (
    <div style={{ width: '100vw', height: '100vh', paddingTop: '2%' }}>
      <h2
        style={{
          paddingTop: '0.5',
          paddingBottom: '0.5%',
          paddingLeft: '5.7%',
        }}
      >
        Today`s Hightlights
      </h2>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 6, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={200}
        width={1000}
        autoSize={false}
      >
        {staticVidgets.map(({ name, value }) => (
          <Card
            key={name}
            style={{
              width: '12.3rem',
              height: '12.3rem',
              marginBottom: '1.2%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2>{name}</h2>
              <span className="material-symbols-outlined">settings</span>
            </div>
            <p className="m-0" style={{ lineHeight: '1.5' }}>
              {value}
            </p>
          </Card>
        ))}
        {/* {staticVidgets.map(({name, value}) => (
                    <div key={name}>
                        {name}
                    </div>
                ))} */}
      </ResponsiveGridLayout>
    </div>
  )
}
