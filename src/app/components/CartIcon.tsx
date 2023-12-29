import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

type Props = {
  size?: number
  color?: string
  bold?: boolean
}

const CartIcon = (props: Props) => {
  const { size = 22, color = 'black', bold = false } = props
  return (
    <IoCartOutline
      size={size}
      color={color}
      style={{
        ...(bold && { filter: 'drop-shadow(0.8px 0.8px 0px #fff)' })
      }}
    />
  )
}

export default CartIcon
