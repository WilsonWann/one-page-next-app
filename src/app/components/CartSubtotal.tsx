import React from 'react'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { getCartListSubtotalAtom } from '@/atoms'
import numberFormat from '@/helper/NumberFormat'

const CartSubtotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding: 1rem;
`

const Subtotal = styled.div`
  font-size: 'larger';
`

const CartSubtotal = () => {
  const [cartListSubtotal] = useAtom(getCartListSubtotalAtom)
  return (
    <CartSubtotalWrapper>
      <div>小計</div>
      <Subtotal>{numberFormat(cartListSubtotal)}</Subtotal>
    </CartSubtotalWrapper>
  )
}

export default CartSubtotal
