import styled from '@emotion/styled';

export const CloseLabel = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover svg {
    opacity: 0.6;
  }
`;
