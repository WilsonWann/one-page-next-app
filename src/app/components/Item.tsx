import React from 'react'
import styled from '@emotion/styled'
import ImageBlock from './ImageBlock'
import { ShoppingItem } from '@/types'
import { useAtom } from 'jotai'
import { shoppingAreaDisplayColumnAtom, setTakeOnHandItemIdAtom } from '@/atoms'
import AddToCartButton from './AddToCartButton'
import numberFormat from '@/helper/NumberFormat'

type ItemWrapperProps = {
  align: string
}

const ItemWrapper = styled.div<ItemWrapperProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: stretch;

  align-items: ${(props) => (props.align === 'center' ? 'center' : `flex-${props.align}`)};
  text-align: ${(props) => props.align};
  gap: 0.5rem;

  & > *:last-child {
    margin-top: auto;
  }
`

const CardImageBlock = styled(ImageBlock)``

const ItemTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 0.5rem;

  & small {
    color: red;
  }
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
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 2px;
`

const SpecialPrice = styled.div`
  color: red;
`

const Content = styled.small`
  color: grey;
  white-space: pre-wrap;
  text-align: inherit;
`

const ItemFooter = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

type Props = {
  item: ShoppingItem
  align?: string
  children?: React.ReactNode
  subtotal?: React.ReactNode
  addToCartButton?: React.ReactNode
}

const Item = (props: Props) => {
  const [columnNumber] = useAtom(shoppingAreaDisplayColumnAtom)
  const [, setItemId] = useAtom(setTakeOnHandItemIdAtom)
  const {
    item,
    align = 'center',
    children = null,
    subtotal = null,
    addToCartButton = <AddToCartButton onClick={() => setItemId(item.id)} />
  } = props

  return (
    <ItemWrapper align={align}>
      <CardImageBlock
        image={item.image}
        alt={item.alt}
        customType={'height'}
        customHeight={`${16 / columnNumber}rem`}
      />
      <ItemTitle>
        {item.title}
        <small>{item.subtitle}</small>
      </ItemTitle>
      <PriceWrapper>
        <Price>原價：{numberFormat(item.price)}</Price>
        <SpecialPrice>現在特價只要{numberFormat(item.specialPrice)}元</SpecialPrice>
      </PriceWrapper>
      {children}
      <Content>{item.content}</Content>
      <ItemFooter>
        {subtotal}
        {addToCartButton}
      </ItemFooter>
    </ItemWrapper>
  )
}

export default Item