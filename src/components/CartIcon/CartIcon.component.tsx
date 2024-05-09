import React from 'react';
import { CartIconWrapper } from './CartIcon.styles';
import { IoCartOutline } from 'react-icons/io5';

type Props = {
  size?: number;
  color?: string;
  bold?: boolean;
  itemNumber?: number;
  onClick?: () => void;
};

const CartIcon = (props: Props) => {
  const {
    size = 22,
    color = 'black',
    bold = false,
    itemNumber = 0,
    onClick,
  } = props;
  return (
    <CartIconWrapper>
      <IoCartOutline
        size={size}
        color={color}
        onClick={onClick}
        style={{
          ...(bold && { filter: 'drop-shadow(0.8px 0.8px 0px #fff)' }),
        }}
      />
      {itemNumber > 0 && <span>{itemNumber}</span>}
    </CartIconWrapper>
  );
};

export default CartIcon;
