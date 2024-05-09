import React from 'react';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { ButtonWrapper, ButtonDiv } from './FixedButtons.styles';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { useAtom } from 'jotai';
import { getCartItemQuantityAtom, getAddToCartSuccessAtom } from '@/atoms';
import AddToCartSuccessTip from '@/components/AddToCartSuccessTip/AddToCartSuccessTip.component';
import FbMessengerButton from '@/components/FBMessengerButton/FBMessengerButton.component';

const FixedButtons = () => {
  const [cartItemQuantity] = useAtom(getCartItemQuantityAtom);
  const [addToCartSuccess] = useAtom(getAddToCartSuccessAtom);

  return (
    <ButtonWrapper>
      <CircleButton
        As='a'
        backgroundColor={'#1877f2'}
        color='white'
        href='http://m.me/musense.marketing'
        target='_blank'
        rel='noreferrer noopener'
      >
        <FbMessengerButton size={24} />
      </CircleButton>
      {cartItemQuantity === 0 ? (
        <CircleButton
          As='a'
          backgroundColor={'white'}
          color={'black'}
          href={'/#marketing-discount-anchor'}
        >
          直接購買
        </CircleButton>
      ) : (
        <CircleButton
          As='a'
          backgroundColor={'#ff3366'}
          color={'white'}
          href={'/#cart-list-anchor'}
        >
          立即結帳
        </CircleButton>
      )}

      <CircleButton
        backgroundColor={'white'}
        onClick={() => window.scrollTo(0, 0)}
      >
        <HiArrowNarrowUp color='black' size={24} />
      </CircleButton>

      <AddToCartSuccessTip active={addToCartSuccess} />
    </ButtonWrapper>
  );
};

const DEFAULT_TYPE = 'div';
type CircleButtonProps<T extends ElementType> = {
  As?: T;
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

function CircleButton<T extends ElementType = typeof DEFAULT_TYPE>({
  As,
  backgroundColor,
  color,
  onClick = () => {},
  children,
  ...props
}: CircleButtonProps<T>) {
  const Component = As ?? DEFAULT_TYPE;
  return (
    <ButtonDiv
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
    >
      <Component {...props}>{children}</Component>
    </ButtonDiv>
  );
}

export default FixedButtons;
