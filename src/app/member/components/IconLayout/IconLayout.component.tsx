import React from 'react';
import { IconWrapper } from './IconLayout.styles';

type Props = {
  children: React.ReactNode;
};

const IconLayout: React.FC<Props> = ({ children }) => {
  return <IconWrapper>{children}</IconWrapper>;
};

export default IconLayout;
