import React from 'react';
import styled from '@emotion/styled';
import { TbReceipt2 } from 'react-icons/tb';

type ReceiptIconWrapperProps = {
  size?: number;
};
const ReceiptIconWrapper = styled.div<ReceiptIconWrapperProps>`
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
const ReceiptIcon = (props: Props) => {
  const { size = 22, name = undefined } = props;
  return (
    <ReceiptIconWrapper size={size}>
      <TbReceipt2 color='black' />
      {name && <span>{name}</span>}
    </ReceiptIconWrapper>
  );
};

export default ReceiptIcon;
