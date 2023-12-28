'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  href: string
  exact?: boolean
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { href, exact = true, children, ...rest } = props
  //! className props need props check
  let className = rest.className
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    className += ' active'
  }

  return (
    <Link href={href} {...rest} className={className}>
      {children}
    </Link>
  )
}

export default NavLink
