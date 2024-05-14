import styled from '@emotion/styled';

export const CartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  background-color: white;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;

  border-top: 1px solid rgba(87, 90, 93, 1);

  & > *:first-child {
    flex-shrink: 0;
  }
  & > *:nth-child(2) {
    min-width: 4.5rem;
  }
  & > *:nth-child(3) {
    min-width: 10rem;
  }
  & > *:last-child {
    margin-top: auto;
  }
`;

export const RemoveButtonWrapper = styled.div`
  position: relative;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;
export const CartTitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  gap: 0.5rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  /* column-gap: 1rem; */
  row-gap: 0rem;
`;

export const Price = styled.div`
  color: grey;
  text-decoration: line-through;
  text-decoration-color: grey;
  text-decoration-thickness: 1px;
`;

export const SpecialPrice = styled.div`
  color: #4d4d4d;

  & b {
    color: red;
  }
`;
