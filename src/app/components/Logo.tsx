import Link from 'next/link'
import React from 'react'
import { IoLogoModelS } from 'react-icons/io'

type Props = {
  size?: number
}

const Logo = (props: Props) => {
  const { size = 36 } = props

  return (
    <Link href={'/'}>
      <IoLogoModelS size={size} />
    </Link>
  )
}

export default Logo
