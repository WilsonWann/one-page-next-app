import React from 'react';
import styled from '@emotion/styled';

type IconWrapperProps = {
  width?: number | string;
  size?: number;
};

const IconWrapper = styled.div<IconWrapperProps>`
  position: relative;
  width: ${({ width }) => width ?? '9rem'};
  height: 2rem;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  padding: 0 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const IconSpan = styled.span`
  position: relative;
  font-size: small;
`;
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
