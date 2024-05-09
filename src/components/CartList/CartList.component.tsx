import React from 'react';
import CartListItem from '@/components/CartListItem/CartListItem.component';
import { CartListDiv, CartListTitle } from './CartList.styles';
import { useAtom } from 'jotai';
import { getCartListAtom } from '@/atoms';

const CartList = () => {
  const [cartList] = useAtom(getCartListAtom);

  if (cartList.length === 0) {
    return (
      <CartListWrapper>
        <CartListTitle>{`購物車「沒有產品」，\n請先將產品「加入購物車」`}</CartListTitle>
      </CartListWrapper>
    );
  }

  return (
    <CartListWrapper>
      <CartListTitle>目前已經選購</CartListTitle>
      {cartList.map((item, index) => (
        <CartListItem key={index} item={item} />
      ))}
    </CartListWrapper>
  );
};

const CartListWrapper = ({ children }: { children: React.ReactNode }) => {
  return <CartListDiv id='cart-list-anchor'>{children}</CartListDiv>;
};

export default CartList;
