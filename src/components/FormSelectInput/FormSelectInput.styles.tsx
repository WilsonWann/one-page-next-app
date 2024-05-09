import styled from '@emotion/styled';

type CompositedInputProps = {
  error?: string;
};

export const CompositedInput = styled.div<CompositedInputProps>`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  height: fit-content;
  background-color: ${(props) =>
    props.error ? 'rgba(249,72,22,0.1)' : 'white'};
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 0.3rem;
  transition: background-color 0.25s linear;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:focus-visible {
    outline: none;
  }

  & > div:last-child {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > input {
      padding: 0.5rem;
      flex: 1;
      line-height: 1;
      font-size: 1rem;
      height: 2.5rem;
      background-color: transparent;

      &:focus-visible {
        outline: none;
      }
    }

    & svg {
      margin-left: auto;
    }
  }
`;
export const LabelDiv = styled.div`
  position: relative;
  /* padding: 0.5rem 0.5rem 0; */
  font-size: medium;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  user-select: none;
  i {
    color: #bbb;
  }
`;
