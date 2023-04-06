import React from 'react'

import logo from '../../../../../img/Logo.png'

import { Menu } from 'primereact/menu'
import { Avatar } from 'primereact/avatar'

interface ForecastHeadProps {
  firstName?: string
  lastName?: string
  menu: React.RefObject<Menu>
  items: {
    label: string
    items: {
      label: string
      icon: string
      command: () => void
    }[]
  }[]
}

export const ForecastHead: React.FC<ForecastHeadProps> = ({ firstName, lastName, menu, items }) => {
  const handlerOpenSetting = (event: React.MouseEvent<HTMLButtonElement>) => {
    menu.current && menu.current.toggle(event)
  }

  return (
    <div className="forecast__head">
      <img src={logo} className="logo" />
      <Menu model={items} popup ref={menu} id="popup_menu" />
      <Avatar
        className="mr-2"
        size="large"
        style={{ marginRight: '2.5%', fontFamily: 'Merriweather, serif' }}
        onClick={handlerOpenSetting}
      >
        {firstName?.[0]}
        {lastName?.[0]}
      </Avatar>
    </div>
  )
}
