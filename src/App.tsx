import React from 'react'
import { Provider } from 'react-redux'
import { AppRoutes } from './AppRoutes'
import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}
