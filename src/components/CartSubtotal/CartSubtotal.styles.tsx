import styled from '@emotion/styled';
type CartSubtotalWrapperType = {
  padding: string;
};
export const CartSubtotalWrapper = styled.div<CartSubtotalWrapperType>`
  position: relative;
  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: -webkit-fill-available;
  width: -moz-available;
  padding: ${(props) => props.padding};

  & > * {
    color: black;
  }
`;

export const Subtotal = styled.div`
  font-size: 'larger';
`;
