'use client';
import React from 'react';
import { redirect } from 'next/navigation';
import { getCartListAtom, getGoodsDeliverAtom } from '@/atoms';
import { useAtomValue } from 'jotai';

type Props = {};

const CheckoutPage = (props: Props) => {
  const cartList = useAtomValue(getCartListAtom);
  const goodsDeliver = useAtomValue(getGoodsDeliverAtom);
  console.log('🚀 ~ CheckoutPage ~ goodsDeliver:', goodsDeliver);
  if (!goodsDeliver.cartItems || goodsDeliver.cartItems.length === 0) {
    redirect('/');
  }
  redirect('/checkout/receipt');
};

export default CheckoutPage;
