import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { LuUser2 } from 'react-icons/lu'
import { IoCartOutline } from 'react-icons/io5'
import { IoLogoModelS } from 'react-icons/io'
import styled from '@emotion/styled'

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
  return (
    <HeaderWrapper>
      <IoLogoModelS size={36} />
      <ButtonWrapper>
        <LuUser2 size={22} />
        <IoCartOutline size={22} />
        <RxHamburgerMenu size={22} />
      </ButtonWrapper>
    </HeaderWrapper>
  )
}

export default Header
