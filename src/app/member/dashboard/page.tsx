'use client';
import React from 'react';
import { UserIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import { useSession } from 'next-auth/react';
import LoginIcon from '@/components/Icon/LoginIcon/LoginIcon.component';
import Layout from '../components/Layout/Layout.component';
import LayoutBlock from '../components/LayoutBlock/LayoutBlock.component';
import UserLoginBinding from './components/UserLoginBinding/UserLoginBinding.component';
import UserBindingBlock from './components/UserBindingBlock/UserBindingBlock.component';
import MemberCenter from './components/MemberCenter/MemberCenter.component';

const DashboardPage = () => {
  const { data: sessionData } = useSession();
  console.log('🚀 ~ DashboardPage ~ sessionData:', sessionData);

  const user = sessionData?.user;
  if (!user) return null;

  return (
    <Layout>
      <LayoutBlock>
        <UserIcon size={42} name='會員中心' />
        <UserBindingBlock>
          <MemberCenter {...user} />
        </UserBindingBlock>
      </LayoutBlock>
      <LayoutBlock>
        <LoginIcon size={42} name='登入綁定' />
        <UserBindingBlock>
          <UserLoginBinding {...user} type={'facebook'} />
          <UserLoginBinding {...user} type={'google'} />
          <UserLoginBinding {...user} type={'line'} />
        </UserBindingBlock>
      </LayoutBlock>
    </Layout>
  );
};

export default DashboardPage;
