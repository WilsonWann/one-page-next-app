import React from 'react'
import styled from '@emotion/styled'
import { SiMessenger } from 'react-icons/si'
import { HiArrowNarrowUp } from 'react-icons/hi'

const ButtonWrapper = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 5rem;
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99999;
`

type CircleButtonProps = {
  backgroundColor?: string
  color?: string
  onClick?: () => void
}
const CircleButton = styled.div<CircleButtonProps>`
  position: relative;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor || '#4d4d4d'};
  color: ${(props) => props.color ?? 'unset'};
  padding: 0.5rem;
  line-height: 1;
  font-size: 0.8rem;
  text-align: center;
  word-break: break-all;

  display: flex;
  justify-content: center;
  align-items: center;
`
const FixedButtons = () => {
  return (
    <ButtonWrapper>
      {/* //! fb chat func not finished */}
      <CircleButton backgroundColor={'#0084ff'}>
        <SiMessenger size={28} color={'white'} />
      </CircleButton>
      {/* //! proceed to checkout func not finished */}
      <CircleButton backgroundColor={'#ff3366'} color={'white'}>
        立即結帳
      </CircleButton>
      <CircleButton backgroundColor={'white'} onClick={() => window.scrollTo(0, 0)}>
        <HiArrowNarrowUp size={24} />
      </CircleButton>
    </ButtonWrapper>
  )
}

export default FixedButtons
