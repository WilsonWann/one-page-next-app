import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { navbarOpenAtom } from '@/atoms/routingAtoms'
import Logo from './Logo'
import CartIcon from './CartIcon'
import UserIcon from './UserIcon'

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 99999;
  padding: 1rem;
  gap: 10rem;
`
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

const Header = () => {
  const [navbarOpen, toggleNavbar] = useAtom(navbarOpenAtom)
  return (
    <HeaderWrapper>
      <Logo />
      <ButtonWrapper>
        <UserIcon />
        <CartIcon />
        <RxHamburgerMenu size={22} onClick={() => toggleNavbar(!navbarOpen)} />
      </ButtonWrapper>
    </HeaderWrapper>
  )
}

export default Header
