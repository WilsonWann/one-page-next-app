'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import Layout from '../components/Layout/Layout.component';
import LayoutBlock from '../components/LayoutBlock/LayoutBlock.component';
import DollarIcon from '@/components/Icon/DollarIcon/DollarIcon.component';

type Props = {};

const PointsPage = (props: Props) => {
  const { data: sessionData } = useSession();
  console.log('🚀 ~ DashboardPage ~ sessionData:', sessionData);

  const user = sessionData?.user;
  if (!user) return null;

  return (
    <Layout>
      <LayoutBlock>
        <DollarIcon size={42} name='會員點數' />
      </LayoutBlock>
    </Layout>
  );
};

export default PointsPage;
