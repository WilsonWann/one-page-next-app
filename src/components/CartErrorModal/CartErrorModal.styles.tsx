import styled from '@emotion/styled';

type ModalDivProps = {
  active: boolean;
};

export const ModalDiv = styled.div<ModalDivProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 8rem;
  width: 15rem;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${(props) => (props.active ? 'calc(99999 + 3)' : '-1')};
  transition: top 0.25s ease-in-out;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
`;
