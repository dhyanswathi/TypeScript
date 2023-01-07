import React from 'react'
import { UserInfo } from './../types'

interface IUserAddressComponentProps {
  user : UserInfo
}

const UserAddress = ({user: { address }} : IUserAddressComponentProps) => {
  return (
    <div><i>{address}</i></div>
  )
}

export default UserAddress