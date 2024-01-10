import React from 'react'
import styled from '@emotion/styled'
import { CartItem } from '@/types'
import CartListItem from './CartListItem'
import { useAtom } from 'jotai'
import { getCartListSubtotalAtom } from '@/atoms'
import numberFormat from '@/helper/numberFormat'

const CartListWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:has(h2) {
    border-top: 1px solid rgba(87, 90, 93, 1);
    border-bottom: 1px solid rgba(87, 90, 93, 1);
    padding: 1rem 0;
  }
`

type Props = {
  cartList: CartItem[]
}

const CartList = (props: Props) => {
  const { cartList } = props
  if (cartList.length === 0) {
    return (
      <CartListWrapper>
        <h2>購物車「沒有產品」，請先將產品「加入購物車」</h2>
      </CartListWrapper>
    )
  }

  return (
    <CartListWrapper>
      {cartList.map((item, index) => (
        <CartListItem key={index} item={item} />
      ))}
    </CartListWrapper>
  )
}

export default CartList
