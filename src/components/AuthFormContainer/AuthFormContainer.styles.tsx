import styled from '@emotion/styled';

export const AuthFormWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;

  & > div:last-child {
    font-size: small;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Divider = styled.div`
  position: relative;
  text-align: center;

  & > span {
    position: relative;
    display: inline-block;
    width: 3rem;
    background-color: white;
    text-align: center;
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.07);
    z-index: 0;
  }
`;
