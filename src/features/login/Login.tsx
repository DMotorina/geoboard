import './style.sass'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import React, { useCallback } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { Link } from 'react-router-dom'

import { login } from './action'

import { LoginForm } from './components/LoginForm'

export const Login = () => {
  const dispatch = useAppDispatch()

  const { error } = useAppSelector((state) => state.user)

  const onSubmit = useCallback(
    (email: string, password: string) => {
      dispatch(login({ email, password }))
    },
    [dispatch]
  )

  return (
    <div className="Login">
      <Link to="/login" />
      {error ? <p className="error-message"> {error} </p> : null}
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}
