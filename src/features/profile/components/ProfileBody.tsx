import '../style.sass'

import React, { useState } from 'react'

import { Message } from './Warning'

import { InputText } from 'primereact/inputtext'

interface ProfileBodyProps {
  firstName?: string
  lastName?: string
  email?: string
}

export const ProfileBody: React.FC<ProfileBodyProps> = ({ firstName, lastName, email }) => {
  const [yourFirstName, setYourFirstName] = useState(firstName)

  const [yourLastName, setYourLastName] = useState(lastName)

  const [yourEmail, setYourEmaile] = useState(email)

  return (
    <>
      {yourFirstName !== firstName ? <Message /> : null}
      <div className="Profile__first-name">
        <span className="ml-2"> First name </span>
        <InputText
          value={yourFirstName}
          onChange={(event) => setYourFirstName(event.target.value)}
        />
      </div>
      <div className="Profile__last-name">
        <span className="ml-2"> Last name </span>
        <InputText value={yourLastName} onChange={(event) => setYourLastName(event.target.value)} />
      </div>
      <div className="Profile__email">
        <span className="ml-2"> Email </span>
        <InputText value={yourEmail} onChange={(event) => setYourEmaile(event.target.value)} />
      </div>
    </>
  )
}
