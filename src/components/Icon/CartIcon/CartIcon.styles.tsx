import styled from '@emotion/styled';

export const CartIconWrapper = styled.div`
  position: relative;

  & > span {
    position: absolute;
    width: 1rem;
    height: 1rem;
    top: -0.3rem;
    right: -0.5rem;
    border-radius: 50%;
    background-color: red;
    color: white;
    text-align: center;
    line-height: 1rem;
    font-size: 0.7rem;
  }
`;
