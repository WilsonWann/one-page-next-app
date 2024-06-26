'use client';
import React from 'react';
import NavLink from '@/components/NavLink/NavLink.component';
import { UserIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import DollarIcon from '@/components/Icon/DollarIcon/DollarIcon.component';
import LogoutIcon from '@/components/Icon/LogoutIcon/LogoutIcon.component';
import ListIcon from '@/components/Icon/ListIcon/ListIcon.component';
import LockIcon from '@/components/Icon/LockIcon/LockIcon.component';
import IconLayout from './components/IconLayout/IconLayout.component';
import { ListWrapper } from './components/ListLayout/ListLayout.styles';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const MemberLayout: React.FC<Props> = ({ children }) => {
  const { data: sessionData } = useSession();
  if (!sessionData || !sessionData.user) return redirect('/login');

  return (
    <div className='w-full flex flex-col justify-between items-stretch p-4'>
      <div>
        <ListWrapper>
          <li>
            <NavLink href={'/member/dashboard'}>
              <IconLayout>
                <UserIcon size={22} name='會員中心' />
              </IconLayout>
            </NavLink>
          </li>
          <li>
            <NavLink href={'/member/orders'}>
              <IconLayout>
                <ListIcon size={22} name='我的訂單' />
              </IconLayout>
            </NavLink>
          </li>
          <li>
            <NavLink href={'/member/points'}>
              <IconLayout>
                <DollarIcon size={22} name='會員點數' />
              </IconLayout>
            </NavLink>
          </li>
          <li>
            <NavLink href={'/member/changePwd'}>
              <IconLayout>
                <LockIcon size={22} name='更改密碼' />
              </IconLayout>
            </NavLink>
          </li>
          <li>
            <NavLink href={'/logout'}>
              <IconLayout>
                <LogoutIcon size={22} name='登出' />
              </IconLayout>
            </NavLink>
          </li>
        </ListWrapper>
        {children}
      </div>
    </div>
  );
};

export default MemberLayout;
