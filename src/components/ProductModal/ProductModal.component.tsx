import React from 'react';
import {
  ItemSelector,
  CloseButtonWrapper,
  ErrorMessage,
} from './ProductModal.styles';
import Backdrop from '@/components/Backdrop/Backdrop.component';
import Item from '@/components/Item/Item.component';
import {
  productModalOpenAtom,
  addToCartAtom,
  takeOnHandAtom,
  productModalErrorAtom,
} from '@/atoms';
import { useAtom } from 'jotai';
import Counter from '@/components/Counter/Counter.component';
import CloseButton from '@/components/CloseButton/CloseButton.component';
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton.component';
import numberFormat from '@/helper/numberFormat';
import usePreventScroll from '@/app/hook/usePreventScroll';

type Props = {
  active: boolean;
};

const ProductModal = (props: Props) => {
  const { active } = props;
  usePreventScroll({ active });

  const [, setModalOpen] = useAtom(productModalOpenAtom);
  const [takeOnHandItem] = useAtom(takeOnHandAtom);
  const [, addToCart] = useAtom(addToCartAtom);
  const [productModalError] = useAtom(productModalErrorAtom);

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
                <ErrorMessage>
                  {productModalError.error.errorMessage}
                </ErrorMessage>
              )}
            </Item>
          </>
        )}
      </ItemSelector>
    </>
  );
};

export default ProductModal;
