import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HeaderWrapper, ButtonWrapper } from './Header.styles';
import { useAtomValue, useSetAtom } from 'jotai';
import { getCartItemQuantityAtom, navbarOpenAtom } from '@/atoms';
import Logo from '@/components/Logo/Logo.component';
import CartIcon from '@/components/Icon/CartIcon/CartIcon.component';
import { UserIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const toggleNavbar = useSetAtom(navbarOpenAtom);
  const cartItemQuantity = useAtomValue(getCartItemQuantityAtom);

  return (
    <HeaderWrapper>
      <Logo />
      <ButtonWrapper>
        <UserIcon onClick={() => router.push('/login')} />
        <CartIcon
          iconText={cartItemQuantity}
          onClick={() => router.push('/cart')}
        />
        <RxHamburgerMenu
          color='black'
          size={22}
          onClick={() => toggleNavbar(true)}
        />
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
