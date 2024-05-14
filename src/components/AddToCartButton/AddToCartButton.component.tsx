import React from 'react';
import CartIcon from '@/components/Icon/CartIcon/CartIcon.component';
import { CheckoutButton, CheckoutText } from './AddToCartButton.styles';

type Props = {
  showIcon?: boolean;
  iconText?: string;
  onClick: () => void;
};

const AddToCartButton = (props: Props) => {
  const { showIcon = true, iconText = '選購', onClick } = props;
  return (
    <CheckoutButton onClick={onClick}>
      {showIcon && <CartIcon size={16} color={'white'} />}
      <CheckoutText>{iconText}</CheckoutText>
    </CheckoutButton>
  );
};

export default AddToCartButton;
