import React from 'react';
import { IconSpan, IconWrapper } from './TemplateIconWrapper.styles';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  iconText?: string | number;

  width?: number | string;
  type?: 'minimal' | 'oval' | 'circle' | 'unset';
  spanType?: 'text' | 'alert';
  bg?: string;
};

const TemplateIconWrapper = (props: Props) => {
  const {
    children,
    onClick = () => {},
    iconText = undefined,
    width,
    type = 'unset',
    spanType = 'text',
    bg = undefined,
  } = props;
  return (
    <IconWrapper
      type={type}
      spanType={spanType}
      onClick={onClick}
      width={width}
      bg={bg}
    >
      {children}
      {iconText && <IconSpan>{iconText}</IconSpan>}
    </IconWrapper>
  );
};

export default TemplateIconWrapper;
