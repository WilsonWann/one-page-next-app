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
      <CartIcon
        iconText={iconText}
        textType={'text'}
        textColor={'white'}
        size={18}
        color={'white'}
      />
    </CheckoutButton>
  );
};

export default AddToCartButton;
