import React from 'react'
import { Button } from 'primereact/button'

interface ProfileHeadProps {
  handlClickBack: () => void
}

export const ProfileHead: React.FC<ProfileHeadProps> = ({ handlClickBack }) => {
  return (
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
  )
}
