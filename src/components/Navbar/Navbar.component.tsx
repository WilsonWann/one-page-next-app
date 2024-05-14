'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  NavbarWrapper,
  NavHeader,
  NavMenu,
  NavItem,
  CloseButtonWrapper,
  NavAnimatedItem,
  NavFooter,
  NavFooterCaption,
} from './Navbar.styles';

import { navbarOpenAtom } from '@/atoms';
import { useAtom } from 'jotai';
import Logo from '@/components/Logo/Logo.component';
import CloseButton from '@/components/CloseButton/CloseButton.component';
import { usePathname } from 'next/navigation';
import Backdrop from '@/components/Backdrop/Backdrop.component';
import usePreventScroll from '@/hook/usePreventScroll';

const Navbar = () => {
  const { data: sessionData } = useSession();
  const pathname = usePathname();
  const [navbarOpen, toggleNavbar] = useAtom(navbarOpenAtom);

  usePreventScroll({ active: navbarOpen });
  return (
    <>
      <Backdrop active={navbarOpen} onClick={() => toggleNavbar(false)} />
      <NavbarWrapper active={navbarOpen}>
        <NavHeader>
          <Logo />
          <CloseButtonWrapper>
            <CloseButton onClick={() => toggleNavbar(false)} />
          </CloseButtonWrapper>
        </NavHeader>
        <NavMenu>
          <NavAnimatedItem href={'/'}>威爾森</NavAnimatedItem>
          <NavAnimatedItem href={'/'}>牛肉麵</NavAnimatedItem>
          <NavAnimatedItem href={'/'}>拉拉寶都</NavAnimatedItem>
          <NavAnimatedItem href={'/'}>三三燒肉</NavAnimatedItem>
          <NavAnimatedItem href={'/'}>關於我們</NavAnimatedItem>
        </NavMenu>
        <NavFooter>
          <NavFooterCaption>會員</NavFooterCaption>
          {sessionData ? (
            <>
              <NavItem As='b'>
                {' '}
                尊貴的 {sessionData?.user?.name} 歡迎光臨
              </NavItem>
              <NavItem href={'/account'}>會員中心</NavItem>
              <NavItem As='button' onClick={signOut}>
                登出
              </NavItem>
            </>
          ) : (
            <>
              <NavItem href={'/login'}>登入</NavItem>
              <NavItem href={'/register'}>註冊</NavItem>
            </>
          )}
        </NavFooter>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
