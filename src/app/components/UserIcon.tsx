import React from 'react'
import { LuUser2 } from 'react-icons/lu'

type Props = {
  size?: number
}

const UserIcon = (props: Props) => {
  const { size = 22 } = props
  return <LuUser2 size={size} />
}

export default UserIcon
