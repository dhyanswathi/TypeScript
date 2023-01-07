import React from 'react'
import { UserInfo } from './../types'

interface IUserNameComponentProps {
  user : UserInfo
}

const UserName = ({user: { name }} : IUserNameComponentProps) => {
  return (
    <h1>{name}</h1>
  )
}

export default UserName