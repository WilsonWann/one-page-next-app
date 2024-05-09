import React from 'react';
import {
  CartWrapper,
  RemoveButtonWrapper,
  CartTitle,
  PriceWrapper,
  Price,
  SpecialPrice,
} from './CartListItem.styles';
import { CartItem } from '@/types';
import TrashIcon from '@/components/TrashIcon/TrashIcon.component';
import ImageBlock from '@/components/ImageBlock/ImageBlock.component';
import Counter from '@/components/Counter/Counter.component';
import { useAtom } from 'jotai';
import { removeCartAtom } from '@/atoms';
import numberFormat from '@/helper/numberFormat';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';

type Props = {
  item: CartItem;
};

const CartListItem = (props: Props) => {
  const { item } = props;
  const [, removeCart] = useAtom(removeCartAtom);

  return (
    <CartWrapper>
      <RemoveButtonWrapper>
        <TrashIcon onClick={() => removeCart(item.id)} />
      </RemoveButtonWrapper>
      {/* <ImageBlock
        image={item.image}
        alt={item.alt}
        customType={'width'}
        customWidth={`3rem`}
      /> */}
      <div>
        <CartTitle>{item.title}</CartTitle>
        <PriceWrapper>
          <Price>{numberFormat(item.price)}</Price>
          <SpecialPrice>
            {numberFormat(item.specialPrice)} * <b>{item.quantity}</b>
          </SpecialPrice>
        </PriceWrapper>
        <Counter cartItemId={item.id} count={item.quantity} />
        {item.error && <ErrorMessage>{item.error.errorMessage}</ErrorMessage>}
      </div>
      <div>{numberFormat(item.subtotal)}</div>
    </CartWrapper>
  );
};

export default CartListItem;
