'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navbarOpenAtom } from '@/atoms/routingAtoms'
import { useAtom } from 'jotai'

type Props = {
  href: string
  exact?: boolean
  children?: React.ReactNode
  externalLink?: boolean
  onClick?: () => void
}

const NavLink = (props: Props) => {
  const [, toggleNavbar] = useAtom(navbarOpenAtom)
  const {
    href,
    children = '',
    exact = true,
    externalLink = false,
    onClick = () => toggleNavbar(false),
    ...rest
  } = props
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
    <Link href={href} {...rest} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export default NavLink
