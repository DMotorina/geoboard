import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { InitOutlet } from './shared/outlets/init'
import { AuthOutlet } from './shared/outlets/auth'
import { PrivateOutlet } from './shared/outlets/private'

import { Login } from './features/login/Login'
import { HomePage } from './features/home/HomePage'
import { Profile } from './features/profile/Profile'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<InitOutlet />}>
          <Route element={<AuthOutlet />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<PrivateOutlet />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
