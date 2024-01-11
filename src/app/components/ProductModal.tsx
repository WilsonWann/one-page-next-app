import React from 'react'
import styled from '@emotion/styled'
import Backdrop from './Backdrop'
import Item from './Item'
import {
  productModalOpenAtom,
  addToCartAtom,
  takeOnHandAtom,
  productModalErrorAtom,
  cartErrorModalAtom
} from '@/atoms'
import { useAtom } from 'jotai'
import Counter from './Counter'
import CloseButton from './CloseButton'
import AddToCartButton from './AddToCartButton'
import CartErrorModal from './CartErrorModal'
import usePreventScroll from '../hook/usePreventScroll'
import numberFormat from '@/helper/numberFormat'

type ItemSelectorProps = {
  active: boolean
  padding?: string
}
const ItemSelector = styled.div<ItemSelectorProps>`
  position: fixed;
  top: ${(props) => (props.active ? '0' : '100vh')};
  left: 0;
  background-color: white;
  height: 100dvh;
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

const ErrorMessage = styled.p`
  color: red;
`
type Props = {
  active: boolean
}

const ProductModal = (props: Props) => {
  const { active } = props

  const [, setModalOpen] = useAtom(productModalOpenAtom)
  const [takeOnHandItem] = useAtom(takeOnHandAtom)
  const [, addToCart] = useAtom(addToCartAtom)
  const [productModalError] = useAtom(productModalErrorAtom)

  const [cartModalError] = useAtom(cartErrorModalAtom)

  usePreventScroll({ active: !!cartModalError.error?.errorMessage })
  return (
    <>
      <Backdrop active={active} onClick={() => setModalOpen(false)} />
      <ItemSelector padding={'1rem'} active={active}>
        {takeOnHandItem && (
          <>
            <Item
              item={takeOnHandItem}
              align={'start'}
              padding={'1rem'}
              subtotal={
                <div style={{ whiteSpace: 'nowrap' }}>
                  小計：{numberFormat(takeOnHandItem.subtotal)}
                </div>
              }
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
              {productModalError.error && (
                <ErrorMessage>{productModalError.error.errorMessage}</ErrorMessage>
              )}
            </Item>
          </>
        )}
      </ItemSelector>
      {cartModalError.error && <CartErrorModal errorMessage={cartModalError.error.errorMessage} />}
    </>
  )
}

export default ProductModal
