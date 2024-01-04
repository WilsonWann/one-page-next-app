'use client'
import React, { useEffect } from 'react'
import NavLink from './NavLink'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { navbarOpenAtom } from '@/atoms'
import { useAtom } from 'jotai'
import Logo from './Logo'
import CloseButton from './CloseButton'
import { usePathname } from 'next/navigation'
import Backdrop from './Backdrop'

const wordColorAnimation = keyframes`
  0%{
    color: #4d4d4d;
  }
  50%{
    color: #ff3366;
  }
  100%{
    color: #4d4d4d;
  }
`

const activeWordColorAnimation = keyframes`
 0%{
    color: #4d4d4d;
  }
  50%{
    color: #a733ff;
  }
  100%{
    color: #4d4d4d;
  }
`

type NavbarWrapperProps = {
  active: boolean
}

const NavbarWrapper = styled.nav<NavbarWrapperProps>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.active ? '0' : '-76vw')};
  background-color: white;
  height: 100vh;
  display: block;
  width: 76vw;
  z-index: calc(99999 + 2);
  transition: left 0.25s ease-in-out;

  display: flex;
  flex-direction: column;

  /* &.active {
    left: 0;
  } */

  & p,
  & h2,
  & a:not(:has(svg)) {
    border-bottom: 1px solid #e6e6e6;
  }
`

const NavHeader = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`
const NavMenu = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const NavItem = styled(NavLink)`
  position: relative;
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  padding: 0 1rem;
`
const NavAnimatedItem = styled(NavItem)({
  animation: `${wordColorAnimation} 1s linear infinite`,

  '&.active': {
    animation: `${activeWordColorAnimation} 1s linear infinite`
  }
})

const NavFooter = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const NavFooterCaption = styled.h2`
  width: 100%;
  padding: 0 1rem;
  height: 4rem;
  line-height: 4rem;
  font-size: larger;
`
const CloseButtonWrapper = styled.div`
  padding-left: 1.5rem;
`

const Navbar = () => {
  const pathname = usePathname()
  // console.log('🚀 ~ file: Navbar.tsx:129 ~ Navbar ~ pathname:', pathname)
  const [navbarOpen, toggleNavbar] = useAtom(navbarOpenAtom)

  return (
    <>
      <Backdrop active={navbarOpen} onClick={() => toggleNavbar(false)} />
      <NavbarWrapper active={navbarOpen}>
        <NavHeader>
          <Logo />
          <CloseButtonWrapper>
            <CloseButton onClick={() => toggleNavbar(false)} />
          </CloseButtonWrapper>
        </NavHeader>
        <NavMenu>
          <NavAnimatedItem href={'/wilson'}>威爾森</NavAnimatedItem>
          <NavAnimatedItem href={'/'}>牛肉麵</NavAnimatedItem>
          <NavAnimatedItem href={'/'}>拉拉寶都</NavAnimatedItem>
          <NavAnimatedItem href={'/'}>三三燒肉</NavAnimatedItem>
          <NavAnimatedItem href={'/'}>關於我們</NavAnimatedItem>
        </NavMenu>
        <NavFooter>
          <NavFooterCaption>會員</NavFooterCaption>
          <NavItem href={'/login'}>登入</NavItem>
          <NavItem href={'/register'}>註冊</NavItem>
        </NavFooter>
      </NavbarWrapper>
    </>
  )
}

export default Navbar
