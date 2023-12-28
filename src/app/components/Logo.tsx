import Link from 'next/link'
import React from 'react'
import { IoLogoModelS } from 'react-icons/io'

const Logo = () => {
  return (
    <Link href={'/'}>
      <IoLogoModelS size={36} />
    </Link>
  )
}

export default Logo
