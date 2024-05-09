import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  position: fixed;
  right: 0.6rem;
  bottom: 5rem;
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 99999;
`;

type ButtonProps = {
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
};
export const ButtonDiv = styled.div<ButtonProps>`
  position: relative;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor || '#4d4d4d'};
  color: ${(props) => props.color ?? 'unset'};
  padding: 0.5rem;
  line-height: 1;
  font-size: 0.8rem;
  text-align: center;
  word-break: break-all;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 3px 3px 3px rgba(0, 0, 0, 0.3);

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
