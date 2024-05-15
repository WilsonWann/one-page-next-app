'use client';
import React from 'react';
import NavLink from '@/components/NavLink/NavLink.component';
import { UserIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import DollarIcon from '@/components/Icon/DollarIcon/DollarIcon.component';
import LogoutIcon from '@/components/Icon/LogoutIcon/LogoutIcon.component';
import ListIcon from '@/components/Icon/ListIcon/ListIcon.component';
import LockIcon from '@/components/Icon/LockIcon/LockIcon.component';

type Props = {
  children: React.ReactNode;
};

const MemberLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-full flex flex-col justify-between items-stretch p-4'>
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
                <UserIcon size={22} name='會員中心' />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink href={'/member/orders'}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ListIcon size={22} name='我的訂單' />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink href={'/member/points'}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <DollarIcon size={22} name='會員點數' />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink href={'/member/changePwd'}>
              {' '}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LockIcon size={22} name='更改密碼' />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink href={'/logout'}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <LogoutIcon size={22} name='登出' />
              </div>
            </NavLink>
          </li>
        </ul>
        {children}
      </div>
    </div>
  );
};

export default MemberLayout;
