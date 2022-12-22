import '../style.sass'

import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import React, { useCallback, useState } from 'react'

import logo from '../../../../src/img/Logo.png'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button'

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }, [])

  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [])

  const handleSubmit = useCallback(() => {
    onSubmit(email, password)
  }, [email, password])

  return (
    <div className="Login__wrapper">
      <img src={logo} className="logoLogin" />
      <div className="Login__email">
        <span className="p-float-label">
          <InputText id="email" value={email} onChange={handleEmailChange} />
          <label htmlFor="email"> Email </label>
        </span>
      </div>
      <div className="Login__password">
        <span className="p-float-label">
          <Password value={password} onChange={handlePasswordChange} feedback={false} toggleMask />
          <label htmlFor="password"> Password </label>
        </span>
      </div>
      <Button
        className="Login__enter"
        label="Enter"
        aria-label="Enter"
        type="submit"
        onClick={() => handleSubmit()}
      />
    </div>
  )
}
