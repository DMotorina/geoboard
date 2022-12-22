import React, { useEffect, useRef } from 'react'
import { useAppSelector } from '@/hooks'

import { Toast } from 'primereact/toast'

export const Greeting = () => {
  const firstName = useAppSelector((state) => state.user.data?.first_name)

  const toast = useRef<Toast>(null)

  useEffect(() => {
    showSuccess()
  }, [])

  const hour = new Date().getHours()
  let greeting = ''

  if (hour >= 5 && hour < 12) {
    greeting = 'Good morning'
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Good afternoon'
  } else if (hour >= 18 && hour < 24) {
    greeting = 'Good evening'
  } else if (hour >= 0 && hour < 5) {
    greeting = 'Good night'
  }

  const showSuccess = () => {
    toast.current &&
      toast.current.show({ severity: 'success', summary: `${greeting}, ${firstName}`, life: 3000 })
  }

  return <Toast ref={toast} style={{ zIndex: 1, marginTop: -8 }} />
}
