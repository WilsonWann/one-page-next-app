import React from 'react';
import { CartSubtotalWrapper, Subtotal } from './CartSubtotal.styles';
import { useAtom } from 'jotai';
import { getCartListSubtotalAtom } from '@/atoms';
import numberFormat from '@/helper/numberFormat';

type Props = {
  title?: string;
  freight?: number;
  padding?: string;
};

const CartSubtotal = (props: Props) => {
  const { title = '小計', freight = 0, padding = '1rem' } = props;
  const [cartListSubtotal] = useAtom(getCartListSubtotalAtom);
  return (
    <CartSubtotalWrapper padding={padding}>
      <div>{title}</div>
      <Subtotal>{numberFormat(cartListSubtotal + freight)}</Subtotal>
    </CartSubtotalWrapper>
  );
};

export default CartSubtotal;
