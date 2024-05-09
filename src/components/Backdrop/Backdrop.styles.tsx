import styled from '@emotion/styled';

type BackDropProps = {
  active: boolean;
  backgroundColor: string;
  zIndex: number;
};

export const BackdropDiv = styled.div<BackDropProps>`
  position: fixed;
  top: 0;
  height: 100dvh;
  left: ${(props) => (props.active ? '0' : '-100vw')};
  width: 100vw;
  background-color: ${(props) => props.backgroundColor};
  z-index: ${(props) => props.zIndex};
`;
