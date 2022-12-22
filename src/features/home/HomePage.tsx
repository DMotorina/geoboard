import './style.sass'
import 'primeicons/primeicons.css'

import React from 'react'

import { Greeting } from './components/Greeting'
import { ToolBar } from './components/ToolBar'
import { Cards } from './components/Cards'

export const HomePage = () => {
  return (
    <>
      <Greeting />
      <div className="homepage">
        <div className="homepage__head">
          <ToolBar />
        </div>
        <div className="homepage__body">
          <Cards />
        </div>
      </div>
    </>
  )
}
