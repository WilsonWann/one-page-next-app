import React from 'react'
import { IoClose } from 'react-icons/io5'
import styled from '@emotion/styled'

const Modal = styled.div`
  position: fixed;
  top: 3rem;
  left: 0;
  margin: auto;
  display: none;
  width: 100vw;
  height: 4rem;
  background-color: #cce6ff;
  box-sizing: border-box;
  z-index: 9999;
  display: block;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: small;
  display: flex;
  transition: top 0.5s ease-out;
`

const ModalTitle = styled.h3`
  color: #4d4d4d;
`

const CloseButton = styled.label`
  padding-left: 1.5rem;
  margin-left: auto;
  cursor: pointer;

  &:hover svg {
    opacity: 0.6;
  }
`

const ModalState = styled.input`
  display: none;

  &:checked + #promotion-modal {
    top: 3rem;
  }

  &:not(checked) + #promotion-modal {
    top: -1rem;
  }
`
type Props = {
  title: string
}
const Promotion = (props: Props) => {
  const { title } = props

  return (
    <>
      <ModalState type='checkbox' id='modal' defaultChecked={true} />
      <Modal id='promotion-modal'>
        <ModalTitle>{title}</ModalTitle>
        <CloseButton htmlFor='modal'>
          <IoClose size={20} />
        </CloseButton>
      </Modal>
    </>
  )
}

export default Promotion
