'use client';
import React from 'react';
import Layout from '../components/Layout/Layout.component';
import LayoutBlock from '../components/LayoutBlock/LayoutBlock.component';
import { useSession } from 'next-auth/react';
import { getGoodsDeliverAtom } from '@/atoms';
import { useAtomValue } from 'jotai';
import ListIcon from '@/components/Icon/ListIcon/ListIcon.component';

type Props = {};

const OrdersPage = (props: Props) => {
  const { data: sessionData } = useSession();
  const goodsDeliver = useAtomValue(getGoodsDeliverAtom);
  console.log('🚀 ~ DashboardPage ~ sessionData:', sessionData);

  const user = sessionData?.user;
  if (!user) return null;

  return (
    <Layout>
      <LayoutBlock>
        <ListIcon size={42} name='我的訂單' />
        <div>{goodsDeliver.cartItems.map((item) => item.title)}</div>
        <div>$ {goodsDeliver.subtotal}</div>
      </LayoutBlock>
    </Layout>
  );
};

export default OrdersPage;
