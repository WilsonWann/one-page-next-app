import React from 'react'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { getCartListSubtotalAtom } from '@/atoms'
import numberFormat from '@/helper/NumberFormat'

const CartSubtotalWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: 1rem;
`

const Subtotal = styled.div`
  font-size: 'larger';
`
type Props = {
  freight?: number
}

const CartSubtotal = (props: Props) => {
  const { freight = 0 } = props
  const [cartListSubtotal] = useAtom(getCartListSubtotalAtom)
  return (
    <CartSubtotalWrapper>
      <div>小計</div>
      <Subtotal>{numberFormat(cartListSubtotal + freight)}</Subtotal>
    </CartSubtotalWrapper>
  )
}

export default CartSubtotal
