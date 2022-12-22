import './style.sass'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@/hooks'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Message } from './components/Warning'

export const Profile = () => {
  const navigate = useNavigate()

  const firstName = useAppSelector((state) => state.user.data?.first_name)

  const lastName = useAppSelector((state) => state.user.data?.last_name)

  const email = useAppSelector((state) => state.user.data?.email)

  const [yourFirstName, setYourFirstName] = useState(firstName)

  const [yourLastName, setYourLastName] = useState(lastName)

  const [yourEmail, setYourEmaile] = useState(email)

  const handlClickBack = () => {
    navigate('/')
  }

  return (
    <>
      {yourFirstName !== firstName ? <Message /> : null}
      <div className="Profile">
        <div className="Profile-body">
          <div className="Profile-head">
            <Button
              className="p-button-rounded p-button-info"
              icon="pi pi-arrow-left"
              onClick={handlClickBack}
            />
            <h1> Profile info </h1>
            <Button
              label="Save"
              className="p-button-rounded p-button-success"
              onClick={() => alert('Save!')}
            />
          </div>
          <div className="Profile__first-name">
            <span className="ml-2"> First name </span>
            <InputText
              value={yourFirstName}
              onChange={(event) => setYourFirstName(event.target.value)}
            />
          </div>
          <div className="Profile__last-name">
            <span className="ml-2"> Last name </span>
            <InputText
              value={yourLastName}
              onChange={(event) => setYourLastName(event.target.value)}
            />
          </div>
          <div className="Profile__email">
            <span className="ml-2"> Email </span>
            <InputText value={yourEmail} onChange={(event) => setYourEmaile(event.target.value)} />
          </div>
        </div>
      </div>
    </>
  )
}
