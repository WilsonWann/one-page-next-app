import React from 'react'
import styled from '@emotion/styled'
import { ShoppingItem } from '@/types'
import Backdrop from './Backdrop'
import Item from './Item'
import { selectedShoppingItemAtom, productModalOpenAtom, addToCartAtom } from '@/atoms'
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
  // item: ShoppingItem | null
  active: boolean
}

const ProductModal = (props: Props) => {
  const { active } = props
  const [, setModalOpen] = useAtom(productModalOpenAtom)
  const [selectedItem] = useAtom(selectedShoppingItemAtom)
  const [, addToCart] = useAtom(addToCartAtom)

  return (
    <>
      <Backdrop active={active} onClick={() => setModalOpen(false)} />
      <ItemSelector padding={'1rem'} active={active}>
        {selectedItem && (
          <>
            <Item
              item={selectedItem}
              align={'start'}
              subtotal={<div style={{ whiteSpace: 'nowrap' }}>Hello WorldHello WorldHello</div>}
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
              <Counter />
            </Item>
          </>
        )}
      </ItemSelector>
    </>
  )
}

export default ProductModal
