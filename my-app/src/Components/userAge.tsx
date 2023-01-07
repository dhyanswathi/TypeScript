import React from 'react'
import { UserInfo } from './../types'

interface IUserAgeComponentProps {
  user : UserInfo
}

const UserAge = ({user: { age }} : IUserAgeComponentProps) => {
  return (
    <div>{age}</div>
  )
}

export default UserAge