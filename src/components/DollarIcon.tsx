import React from 'react';
import styled from '@emotion/styled';
import { PiCurrencyCircleDollarLight } from 'react-icons/pi';

type DollarIconWrapperProps = {
  size?: number;
};
const DollarIconWrapper = styled.div<DollarIconWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & > svg {
    height: ${({ size }) => size ?? 24}px;
    width: ${({ size }) => size ?? 24}px;
  }
  & > span {
    font-size: ${({ size }) => (size ? size * 0.8 : 24 * 0.8)}px;
  }
`;
type Props = {
  size?: number;
  name?: string;
};
const DollarIcon = (props: Props) => {
  const { size = 22, name = undefined } = props;
  return (
    <DollarIconWrapper size={size}>
      <PiCurrencyCircleDollarLight color='black' />
      {name && <span>{name}</span>}
    </DollarIconWrapper>
  );
};

export default DollarIcon;
