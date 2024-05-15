import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

type Props = {
  size?: number;
  color?: string;
  iconText?: number | string;
  textType?: 'alert' | 'text';
  textColor?: string;
  onClick?: () => void;
};

const CartIcon = (props: Props) => {
  const {
    size = 22,
    textType = 'alert',
    textColor = 'black',
    color = 'black',
    iconText = 0,
    onClick,
  } = props;
  return (
    <TemplateIconWrapper
      iconText={iconText}
      textType={textType}
      textColor={textColor}
      onClick={onClick}
    >
      <IoCartOutline size={size} color={color} />
    </TemplateIconWrapper>
  );
};

export default CartIcon;
