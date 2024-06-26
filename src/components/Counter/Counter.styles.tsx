import styled from '@emotion/styled';
export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;

  & > * {
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    height: 2rem;
    padding: 0;
    margin: 0;
    color: black;
  }
`;

export const CounterButton = styled.div`
  width: 2rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: none;
  cursor: pointer;
`;
export const DecrementButton = styled(CounterButton)`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;
export const IncrementButton = styled(CounterButton)``;

export const CounterPanel = styled.div`
  width: 3rem;
  text-align: center;
  border-radius: unset;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-left: none;
`;
