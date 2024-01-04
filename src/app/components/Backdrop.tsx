'use client'
import React from 'react'
import styled from '@emotion/styled'
import usePreventScroll from '../hook/usePreventScroll'

type BackDropProps = {
  active: boolean
}

const BackdropDiv = styled.div<BackDropProps>`
  position: fixed;
  top: 0;
  height: 100vh;
  left: ${(props) => (props.active ? '0' : '-100vw')};
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: calc(99999 + 1);
`

type Props = {
  active: boolean
  onClick: () => void
}

const Backdrop = (props: Props) => {
  const { active, onClick } = props
  usePreventScroll({ active })
  return <BackdropDiv active={active} onClick={onClick} />
}

export default Backdrop
