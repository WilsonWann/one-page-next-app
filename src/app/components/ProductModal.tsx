import React from 'react'
import styled from '@emotion/styled'
import Backdrop from './Backdrop'
import Item from './Item'
import {
  productModalOpenAtom,
  addToCartAtom,
  upperBoundWarningAtom,
  lowerBoundWarningAtom,
  takeOnHandAtom,
  productModalErrorAtom
} from '@/atoms'
import { useAtom } from 'jotai'
import Counter from './Counter'
import CloseButton from './CloseButton'
import AddToCartButton from './AddToCartButton'

type ItemSelectorProps = {
  active: boolean
  padding?: string
}
const ItemSelector = styled.div<ItemSelectorProps>`
  position: fixed;
  top: ${(props) => (props.active ? '0' : '100vh')};
  left: 0;
  background-color: white;
  height: 100vh;
  width: 100vw;
  /* padding: ${(props) => props.padding ?? '0'}; */
  display: block;
  z-index: calc(99999 + 2);
  transition: top 0.25s ease-in-out;
`

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: white;
`

type Props = {
  active: boolean
}

const ProductModal = (props: Props) => {
  const { active } = props

  const [, setModalOpen] = useAtom(productModalOpenAtom)
  const [takeOnHandItem] = useAtom(takeOnHandAtom)
  console.log('🚀 ~ file: ProductModal.tsx:57 ~ ProductModal ~ takeOnHandItem:', takeOnHandItem)
  const [, addToCart] = useAtom(addToCartAtom)
  const [productModalError] = useAtom(productModalErrorAtom)

  // const [upperBoundWarning] = useAtom(productModalWarningAtom)
  return (
    <>
      <Backdrop active={active} onClick={() => setModalOpen(false)} />
      <ItemSelector padding={'1rem'} active={active}>
        {takeOnHandItem && (
          <>
            <Item
              item={takeOnHandItem}
              align={'start'}
              subtotal={<div style={{ whiteSpace: 'nowrap' }}>小計：{takeOnHandItem.subtotal}</div>}
              addToCartButton={
                <AddToCartButton
                  showIcon={false}
                  iconText={'加入購物車'}
                  onClick={() => addToCart()}
                />
              }
            >
              <CloseButtonWrapper>
                <CloseButton onClick={() => setModalOpen(false)} />
              </CloseButtonWrapper>
              <Counter count={takeOnHandItem.quantity} />
              {productModalError.error && <p>{productModalError.error.errorMessage}</p>}
            </Item>
          </>
        )}
      </ItemSelector>
    </>
  )
}

export default ProductModal
