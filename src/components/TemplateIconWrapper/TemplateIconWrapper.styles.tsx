import styled from '@emotion/styled';

type IconWrapperProps = {
  width?: number | string;
  size?: number;
};

export const IconWrapper = styled.div<IconWrapperProps>`
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

export const IconSpan = styled.span`
  position: relative;
  font-size: small;
`;
