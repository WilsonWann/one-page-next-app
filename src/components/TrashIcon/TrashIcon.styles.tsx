import styled from '@emotion/styled';

export const TrashDiv = styled.div`
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
