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
import { CardImageBlock } from '../Item/Item.styles';

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

  if (!takeOnHandItem) {
    return (
      <>
        <Backdrop active={active} onClick={() => setModalOpen(false)} />
        <ItemSelector padding={'1rem'} active={active} />
      </>
    );
  }

  if (!takeOnHandItem.image) {
    return (
      <>
        <Backdrop active={active} onClick={() => setModalOpen(false)} />
        <ItemSelector padding={'1rem'} active={active}>
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
        </ItemSelector>
      </>
    );
  }

  return (
    <>
      <Backdrop active={active} onClick={() => setModalOpen(false)} />
      <ItemSelector padding={'1rem'} active={active}>
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
          imageEl={
            <CardImageBlock
              {...takeOnHandItem.image}
              restrict={'width'}
              setWidth={'100%'}
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
      </ItemSelector>
    </>
  );
};

export default ProductModal;
