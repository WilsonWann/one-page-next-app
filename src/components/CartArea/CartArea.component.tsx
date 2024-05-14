import React from 'react';
import CartList from '@/components/CartList/CartList.component';
import CartDiscount from '@/components/CartDiscount/CartDiscount.component';
import CartSubtotal from '@/components/CartSubtotal/CartSubtotal.component';
import CheckoutContainer from '@/components/CheckoutContainer/CheckoutContainer.component';
import CartErrorModal from '@/components/CartErrorModal/CartErrorModal.component';
import { useAtom } from 'jotai';
import { cartErrorModalAtom } from '@/atoms';
import usePreventScroll from '@/hook/usePreventScroll';

const CartArea = () => {
  const [cartModalError] = useAtom(cartErrorModalAtom);

  usePreventScroll({ active: !!cartModalError.error?.errorMessage });
  return (
    <>
      <CartList />
      <CartDiscount />
      <CartSubtotal />
      <CheckoutContainer />
      {cartModalError.error && (
        <CartErrorModal errorMessage={cartModalError.error.errorMessage} />
      )}
    </>
  );
};

export default CartArea;
