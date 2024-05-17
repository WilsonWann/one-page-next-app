import React from 'react';
import { ItemSelector, CloseButtonWrapper } from './ProductModal.styles';
import Backdrop from '@/components/Backdrop/Backdrop.component';
import Item from '@/components/Item/Item.component';
import {
  productModalOpenAtom,
  addToCartAtom,
  takeOnHandAtom,
  productModalErrorAtom,
} from '@/atoms';
import { useAtomValue, useSetAtom } from 'jotai';
import Counter from '@/components/Counter/Counter.component';
import CloseButton from '@/components/CloseButton/CloseButton.component';
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton.component';
import numberFormat from '@/helper/numberFormat';
import usePreventScroll from '@/hook/usePreventScroll';
import { CardImageBlock } from '../Item/Item.styles';
import ErrorMessage from '../ErrorMessage/ErrorMessage.component';

type Props = {
  active: boolean;
};

const ProductModal = (props: Props) => {
  const { active } = props;
  usePreventScroll({ active });

  const takeOnHandItem = useAtomValue(takeOnHandAtom);
  const productModalError = useAtomValue(productModalErrorAtom);
  const setModalOpen = useSetAtom(productModalOpenAtom);
  const addToCart = useSetAtom(addToCartAtom);

  if (!takeOnHandItem) {
    return (
      <>
        <Backdrop active={active} onClick={() => setModalOpen(false)} />
        <ItemSelector padding={'1rem'} active={active} />
      </>
    );
  }

  const itemProps = {
    item: takeOnHandItem,
    align: 'start',
    padding: '1rem',
    subtotal: (
      <div style={{ padding: '0 0.5rem', whiteSpace: 'nowrap' }}>
        小計：{numberFormat(takeOnHandItem.subtotal)}
      </div>
    ),
    addToCartButton: (
      <AddToCartButton
        showIcon={false}
        iconText={'加入購物車'}
        onClick={() => addToCart()}
      />
    ),
    ...(takeOnHandItem.image && {
      imageEl: (
        <CardImageBlock
          {...takeOnHandItem.image}
          restrict={'width'}
          setWidth={'100%'}
        />
      ),
    }),
  };

  return (
    <>
      <Backdrop active={active} onClick={() => setModalOpen(false)} />
      <ItemSelector padding={'1rem'} active={active}>
        <Item {...itemProps}>
          <CloseButtonWrapper>
            <CloseButton onClick={() => setModalOpen(false)} />
          </CloseButtonWrapper>
          <Counter count={takeOnHandItem.quantity} />
          <ErrorMessage error={productModalError.error} />
        </Item>
      </ItemSelector>
    </>
  );
};

export default ProductModal;
