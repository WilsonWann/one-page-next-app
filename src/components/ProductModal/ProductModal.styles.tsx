import styled from '@emotion/styled';

type ItemSelectorProps = {
  active: boolean;
  padding?: string;
};
export const ItemSelector = styled.div<ItemSelectorProps>`
  position: fixed;
  top: ${(props) => (props.active ? '0' : '100vh')};
  left: 0;
  right: 0;
  background-color: white;
  height: 100dvh;
  width: 100%;
  /* padding: ${(props) => props.padding ?? '0'}; */
  display: block;
  z-index: calc(99999 + 2);
  transition: top 0.25s ease-in-out;
`;

export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: white;
`;
