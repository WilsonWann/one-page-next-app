import React from 'react';
import { IconSpan, IconWrapper } from './TemplateIconWrapper.styles';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  iconText: string;
  width?: number | string;
  size?: number;
};

const TemplateIconWrapper = (props: Props) => {
  const { children, onClick = () => {}, iconText } = props;
  return (
    <IconWrapper onClick={onClick} width={props.width} size={props.size}>
      {children}
      <IconSpan>{iconText}</IconSpan>
    </IconWrapper>
  );
};

export default TemplateIconWrapper;
