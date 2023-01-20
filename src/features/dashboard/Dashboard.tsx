import './style.sass'
import 'primeicons/primeicons.css'

import React, { useEffect } from 'react'

import { Greeting } from './components/Greeting'
import { Location } from './components/Location'
import { Forecast } from './components/Forecast'
import { Widgets } from './components/Widgets'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getDashboardData } from './action'

export const Dashboard = () => {
  const loading = useAppSelector((state) => state.dashboard.loadingDashboard)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDashboardData())
  }, [dispatch])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Greeting />
      <div className="dashboard">
        <Location />
        <Forecast />
        <Widgets />
      </div>
    </>
  )
}
