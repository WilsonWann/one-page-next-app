import styled from '@emotion/styled';

type ReceiptIconWrapperProps = {
  size?: number;
};
export const ReceiptIconWrapper = styled.div<ReceiptIconWrapperProps>`
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
