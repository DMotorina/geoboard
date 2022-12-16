import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
  const navigate = useNavigate()

  const [value1, setValue1] = useState('Daria')
  const [value2, setValue2] = useState('Motorina')
  const [value3, setValue3] = useState('local.user@gmail.com')

  return (
    <>
      <div>
        <Button
          className="p-button-rounded p-button-info"
          icon="pi pi-arrow-left"
          onClick={() => navigate('/')}
        />
        <h1>Profile info</h1>
        <Button label="Save" className="p-button-rounded p-button-success" />
        <div>
          <div>
            <span className="ml-2">First name</span>
            <InputText value={value1} onChange={(e) => setValue1(e.target.value)} />
          </div>
          <div>
            <span className="ml-2">Last name</span>
            <InputText value={value2} onChange={(e) => setValue2(e.target.value)} />
          </div>
          <div>
            <span className="ml-2">Email</span>
            <InputText value={value3} onChange={(e) => setValue3(e.target.value)} />
          </div>
          <Button label="Change your password" className="p-button-raised p-button-secondary" />
          <Button label="Delete accaunt" className="p-button-raised p-button-danger" />
        </div>
      </div>
    </>
  )
}
