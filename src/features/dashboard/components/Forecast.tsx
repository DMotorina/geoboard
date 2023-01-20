import '../style.sass'
import 'primeicons/primeicons.css'

import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { logout } from '@/features/login/action'

import { useAppDispatch, useAppSelector } from '@/hooks'

import { Cards } from './components/Cards'
import { ForecastSubhead } from './components/ForecastSubhead'
import { ForecastHead } from './components/ForecastHead'

import { Menu } from 'primereact/menu'

export const Forecast = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const menu = useRef<Menu>(null)

  const firstName = useAppSelector((state) => state.user.data?.first_name)

  const lastName = useAppSelector((state) => state.user.data?.last_name)

  const items = [
    {
      label: 'Account',
      items: [{ label: 'Profile', icon: 'pi pi-user-edit', command: () => navigate('/profile') }],
    },

    {
      label: 'Options',
      items: [
        {
          label: 'Log out',
          icon: 'pi pi-times',
          command: () => {
            dispatch(logout())
          },
        },
      ],
    },
  ]

  const [temp, setTemp] = useState(false)

  const handlClickTempCelc = () => {
    setTemp(false)
  }

  const handlClickTempFar = () => {
    setTemp(true)
  }

  return (
    <div className="forecast">
      <ForecastHead firstName={firstName} lastName={lastName} menu={menu} items={items} />
      <ForecastSubhead
        handlClickTempCelc={handlClickTempCelc}
        handlClickTempFar={handlClickTempFar}
      />
      <Cards temp={temp} />
    </div>
  )
}
