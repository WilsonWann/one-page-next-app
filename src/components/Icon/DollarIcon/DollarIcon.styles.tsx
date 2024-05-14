import styled from '@emotion/styled';

type DollarIconWrapperProps = {
  size?: number;
};
export const DollarIconWrapper = styled.div<DollarIconWrapperProps>`
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
