import '../style.sass'

import React, { useEffect, useRef } from 'react'

import { Toast } from 'primereact/toast'
import { Button } from 'primereact/button'

export const Message = () => {
  const toast = useRef<Toast>(null)

  useEffect(() => {
    showConfirm()
  }, [])

  const showConfirm = () => {
    toast.current &&
      toast.current.show({
        severity: 'warn',
        sticky: true,
        content: (
          <div className="flex flex-column" style={{ flex: '1', textAlign: 'center' }}>
            <div className="text-center">
              <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
              <h4>Are you sure?</h4>
              <p>Confirm to proceed</p>
            </div>
            <div className="grid p-fluid">
              <div className="col-6">
                <Button type="button" label="Yes" className="p-button-success" />
              </div>
              <div className="col-6">
                <Button type="button" label="No" className="p-button-secondary" />
              </div>
            </div>
          </div>
        ),
      })
  }

  return <Toast ref={toast} />
}
