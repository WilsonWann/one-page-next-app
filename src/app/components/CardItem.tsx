import React from 'react'
import styled from '@emotion/styled'
import AddToCartButton from './AddToCartButton'
import ImageBlock from './ImageBlock'
import { ShoppingItem } from '@/types'
import { useAtom } from 'jotai'
import { shoppingAreaDisplayColumnAtom } from '@/atoms/routingAtoms'

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: 'white';

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  & button {
    margin-top: auto;
  }
`

const CardImageBlock = styled(ImageBlock)`
  /* width: 100% !important;
  height: 10rem; */
`

const ItemTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  text-align: center;
`
type Props = {
  item: ShoppingItem
}

const CardItem = (props: Props) => {
  const { item } = props
  const [columnNumber] = useAtom(shoppingAreaDisplayColumnAtom)
  return (
    <Item>
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
        <Price>原價：{item.price}</Price>
        <SpecialPrice>現在特價只要{item.specialPrice}元</SpecialPrice>
      </PriceWrapper>
      <Content>{item.content}</Content>
      <AddToCartButton />
    </Item>
  )
}

export default CardItem
