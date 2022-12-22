import 'primeicons/primeicons.css'

import React from 'react'

import { Card } from 'primereact/card'

export const Cards = () => {
  const header1 = <span className="material-symbols-outlined"> settings </span>

  const header2 = <i className="pi pi-arrow-left"></i>

  return (
    <>
      <Card title="Outside look" style={{ width: '25rem', marginBottom: '2em' }} header={header1}>
        <p className="m-0" style={{ lineHeight: '1.5' }}>
          Do not worry! It is test card :3
        </p>
      </Card>
      <Card title="Inside look" style={{ width: '25rem', marginBottom: '2em' }} header={header2}>
        <p className="m-0" style={{ lineHeight: '1.5' }}>
          Do not worry! It is test card :3
        </p>
      </Card>
    </>
  )
}
