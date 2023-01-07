import React from 'react'
import { UserInfo } from './../types'

interface IUserNameChangeComponentProps {
  user : UserInfo,
  onNameChanged(e: React.ChangeEvent<HTMLInputElement>): void
}

const UserNameChange = ({user: {name}, onNameChanged} : IUserNameChangeComponentProps) => {
  return (
    <div>
      <h2>Change the name of '{name}' here</h2>
      <input type="text" value={name} onChange={onNameChanged} />
    </div>
  )
}

export default UserNameChange