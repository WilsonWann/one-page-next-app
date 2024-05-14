import React from 'react';
import { CartIconWrapper } from './CartIcon.styles';
import { IoCartOutline } from 'react-icons/io5';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

type Props = {
  size?: number;
  color?: string;
  iconText?: number;
  onClick?: () => void;
};

const CartIcon = (props: Props) => {
  const { size = 22, color = 'black', iconText = 0, onClick } = props;
  return (
    <TemplateIconWrapper
      spanType={'alert'}
      iconText={iconText}
      onClick={onClick}
    >
      <IoCartOutline size={size} color={color} />
    </TemplateIconWrapper>
  );
};

export default CartIcon;
