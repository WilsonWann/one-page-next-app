import styled from '@emotion/styled';

export const CartDiscountWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 1rem;
  border-bottom: 1px solid rgba(87, 90, 93, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  & b {
    font-size: large;
    font-weight: bold;
  }
`;
