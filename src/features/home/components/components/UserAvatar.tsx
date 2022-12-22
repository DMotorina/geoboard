import React from 'react'
import { Avatar } from 'primereact/avatar'
import { useAppSelector } from '@/hooks'

export const UserAvatar = () => {
  const firstName = useAppSelector((state) => state.user.data?.first_name)

  const lastName = useAppSelector((state) => state.user.data?.last_name)

  return (
    <>
      <Avatar className="mr-2" size="large">
        {firstName?.[0]}
        {lastName?.[0]}
      </Avatar>
    </>
  )
}
