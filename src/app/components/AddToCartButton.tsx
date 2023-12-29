import React from 'react'
import styled from '@emotion/styled'
import CartIcon from './CartIcon'

const CheckoutButton = styled.button`
  border: none;
  outline: none;
  position: relative;
  padding: 0 1rem;
  background-color: #ff3366;
  height: 2rem;
  width: 100%;
  border-radius: 10rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`

const CheckoutText = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1rem;
  color: white;
`
type Props = {}

const AddToCartButton = (props: Props) => {
  return (
    <CheckoutButton>
      <CartIcon size={16} color={'white'} bold />
      <CheckoutText>選購</CheckoutText>
    </CheckoutButton>
  )
}

export default AddToCartButton
