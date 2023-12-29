'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  href: string
  exact?: boolean
  children: React.ReactNode
  externalLink?: boolean
}

const NavLink = (props: Props) => {
  const { href, exact = true, children, externalLink = false, ...rest } = props
  //! className props need props check
  let className = rest.className
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (externalLink) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    )
  }

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
