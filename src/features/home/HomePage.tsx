import 'primeicons/primeicons.css'

import React, { useRef } from 'react'
import { useAppDispatch } from '@/hooks'

import { logout } from '../login/action'

import { Toolbar } from 'primereact/toolbar'
import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button'
import { UserAvatar } from '@/shared/ui/UserAvatar'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
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

  const leftContents = () => {
    return (
      <>
        <h3>Logo</h3>
      </>
    )
  }

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

  return (
    <>
      <div>
        <Toolbar left={leftContents} right={rightContents} />
      </div>
    </>
  )
}
