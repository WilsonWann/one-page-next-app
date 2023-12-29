import React from 'react'
import { LuUser2 } from 'react-icons/lu'
import { LuUserPlus2 } from 'react-icons/lu'

type Props = {
  type: 'default' | 'add'
  size?: number
}

const UserIcon = (props: Props) => {
  const { type = 'default', size = 22 } = props
  if (type === 'default') {
    return <LuUser2 size={size} />
  }

  if (type === 'add') {
    return <LuUserPlus2 size={size} />
  }
}

export default UserIcon
