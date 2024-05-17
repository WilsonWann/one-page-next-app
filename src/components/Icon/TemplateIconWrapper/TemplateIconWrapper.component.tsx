import React, { useEffect } from 'react';
import { IconSpan, IconWrapper } from './TemplateIconWrapper.styles';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  iconText?: string | number;
  textType?: 'text' | 'alert';
  textColor?: string;

  width?: number | string;
  type?: 'minimal' | 'oval' | 'circle' | 'unset';
  bg?: string;
};

const TemplateIconWrapper = (props: Props) => {
  const {
    children,
    onClick = () => {},
    iconText = undefined,
    width,
    type = 'unset',
    textType = 'text',
    textColor = 'black',
    bg = undefined,
  } = props;

  const isValid = (value?: string | number) => {
    if (typeof value === 'number') {
      return value > 0;
    }

    if (typeof value === 'string') {
      return value;
    }
  };

  return (
    <IconWrapper
      type={type}
      textType={textType}
      textColor={textColor}
      onClick={onClick}
      width={width}
      bg={bg}
    >
      {children}
      {isValid(iconText) && <IconSpan>{iconText}</IconSpan>}
    </IconWrapper>
  );
};

export default TemplateIconWrapper;
