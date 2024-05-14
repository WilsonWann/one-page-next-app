'use client';
import React from 'react';
// import { getServerSession } from 'next-auth';
import NavLink from '@/components/NavLink/NavLink.component';
import { UserIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import DollarIcon from '@/components/Icon/DollarIcon/DollarIcon.component';
import LogoutIcon from '@/components/Icon/LogoutIcon/LogoutIcon.component';
// import Link from 'next/link';
// import UserIcon from '@/components/UserIcon/UserIcon.component';
type Props = {
  children: React.ReactNode;
};

const MemberLayout: React.FC<Props> = async ({ children }) => {
  // const session = await getServerSession();
  // console.log('🚀 ~ MemberLayout ~ session:', session);

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          columnGap: '1rem',
          rowGap: '0.5rem',
          flexWrap: 'wrap',
        }}
      >
        <li>
          <NavLink href={'/member/dashboard'}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserIcon name='會員中心' />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink href={'/member/orders'}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserIcon /> 我的訂單
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink href={'/member/points'}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DollarIcon /> 會員點數
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink href={'/member/changePwd'}>
            {' '}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserIcon /> 更改密碼
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink href={'/logout'}>
            {' '}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <LogoutIcon /> 登出
            </div>
          </NavLink>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default MemberLayout;
