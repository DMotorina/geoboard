import './style.sass'

import React from 'react'
import { useAppSelector } from '@/hooks'

import { ProfileHead } from './components/ProfileHead'
import { ProfileBody } from './components/ProfileBody'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
  const navigate = useNavigate()

  const firstName = useAppSelector((state) => state.user.data?.first_name)

  const lastName = useAppSelector((state) => state.user.data?.last_name)

  const email = useAppSelector((state) => state.user.data?.email)

  const handlClickBack = () => {
    navigate('/')
  }

  return (
    <div className="Profile">
      <div className="Profile-form">
        <ProfileHead handlClickBack={handlClickBack} />
        <ProfileBody firstName={firstName} lastName={lastName} email={email} />
      </div>
    </div>
  )
}
