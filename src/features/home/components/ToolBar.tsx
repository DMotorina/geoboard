import React, { useRef } from 'react'
import { useAppDispatch } from '@/hooks'
import { useNavigate } from 'react-router-dom'

import { logout } from '../../login/action'

import logo from '../../../img/Logo.png'
import { UserAvatar } from '@/features/home/components/components/UserAvatar'

import { Toolbar } from 'primereact/toolbar'
import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button'

export const ToolBar = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const menu = useRef<Menu>(null)

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

  const leftContents = () => <img src={logo} className="logo" />

  const rightContents = () => {
    return (
      <>
        <Menu model={items} popup ref={menu} id="popup_menu" />
        <Button
          aria-controls="popup_menu"
          aria-haspopup
          className="p-button-secondary p-button-text"
          onClick={handlerOpenSetting}
        >
          <UserAvatar />
        </Button>
      </>
    )
  }

  const handlerOpenSetting = (event: React.MouseEvent<HTMLButtonElement>) => {
    menu.current && menu.current.toggle(event)
  }

  return <Toolbar left={leftContents} right={rightContents} />
}
