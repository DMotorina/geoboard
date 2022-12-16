import React from 'react'
import { Avatar } from 'primereact/avatar'

export const UserAvatar = () => {
  return (
    <>
      <Avatar className="mr-2" size="large">
        {'Daria'[0]}
        {'Motorina'[0]}
      </Avatar>
    </>
  )
}
