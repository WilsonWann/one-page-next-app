import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Item from './Item'
import { CartItem } from '@/types'
import TrashIcon from './TrashIcon'
import ImageBlock from './ImageBlock'
import Counter from './Counter'
import { useAtom } from 'jotai'
import { removeCartAtom, quantityAtom } from '@/atoms'

const CartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  background-color: white;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* text-align: ${(props) => props.align}; */
  /* gap: 0.5rem; */

  border-bottom: 1px solid rgba(87, 90, 93, 1);

  & > *:first-of-type {
    border-top: 1px solid rgba(87, 90, 93, 1);
  }
`
const CardImageBlock = styled(ImageBlock)``

const RemoveButtonWrapper = styled.div`
  position: relative;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: lightgray;
`
const CartTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 0.5rem;
`

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.5rem;
`

const Price = styled.div`
  color: grey;
  text-decoration: line-through;
  text-decoration-color: grey;
  text-decoration-thickness: 1px;
`

const SpecialPrice = styled.div`
  color: #4d4d4d;

  & b {
    color: red;
  }
`

const Content = styled.small`
  color: grey;
  white-space: pre-wrap;
  text-align: inherit;
`

const CartFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

type Props = {
  item: CartItem
}

const CartItem = (props: Props) => {
  const { item } = props
  console.log('🚀 ~ file: CartItem.tsx:92 ~ CartItem ~ item:', item)
  const [, removeCart] = useAtom(removeCartAtom)
  const [quantity, setQuantity] = useAtom(quantityAtom)
  console.log('🚀 ~ file: CartItem.tsx:96 ~ CartItem ~ quantity:', quantity)

  return (
    <CartWrapper>
      <RemoveButtonWrapper>
        <TrashIcon onClick={() => removeCart(item.id)} />
      </RemoveButtonWrapper>
      <CardImageBlock image={item.image} alt={item.alt} customType={'width'} customWidth={`3rem`} />
      <div>
        <CartTitle>{item.title}</CartTitle>
        <PriceWrapper>
          <Price>NT$ {item.price}</Price>
          <SpecialPrice>
            NT$ {item.specialPrice} * <b>{item.quantity}</b>
          </SpecialPrice>
        </PriceWrapper>
        <Counter cartItemId={item.id} count={item.quantity} />
        {item.error && <p>{item.error.errorMessage}</p>}
      </div>
      <div>NT$ {item.subtotal}</div>
    </CartWrapper>
  )
}

export default CartItem
