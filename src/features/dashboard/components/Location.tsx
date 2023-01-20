import '../style.sass'

import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { Image } from 'primereact/image'
import { Search } from './components/Search'
import { searchLocation } from '../action'

export const Location = () => {
  const dispatch = useAppDispatch()

  const location = useAppSelector((state) => state.dashboard.data?.location)

  const temper = useAppSelector((state) => state.dashboard.data?.temperature)

  const condition = useAppSelector((state) => state.dashboard.data?.condition)

  const onSubmit = useCallback(
    (query: string) => {
      dispatch(searchLocation({ query }))
    },
    [dispatch]
  )

  return (
    <div className="location">
      <div className="location__head">
        <div className="field col-12 md:col-4" style={{ marginTop: '5%' }}>
          <Search onSubmit={onSubmit} />
        </div>
      </div>
      <div className="location__body">
        <Image src={condition?.icon} alt="Image" width="300px" />
        <h1>{Math.floor(Number(temper?.celsius))}°C </h1>
        <h2>
          {location?.name}, {location?.country}
        </h2>
        <h2>{location?.day_of_week}</h2>
      </div>
    </div>
  )
}
