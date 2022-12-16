import React, { useRef } from 'react'

import { Toolbar } from 'primereact/toolbar'
import { Menu } from 'primereact/menu'
import { Button } from 'primereact/button'

export const HomePage = () => {
  const menu = useRef<Menu>(null)

  const items = [
    {
      label: 'Account',
      items: [{ label: 'Profile' }],
    },

    {
      label: 'Options',
      items: [{ label: 'Log out' }],
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
          label="Show"
          icon="pi pi-bars"
          aria-controls="popup_menu"
          aria-haspopup
          id="button-event"
          className="button-toolbar"
          onClick={handlerOpenSetting}
        />
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
      <h1> Hello, this is HomePage! </h1>
    </>
  )
}
