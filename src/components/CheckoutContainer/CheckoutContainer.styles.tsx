import styled from '@emotion/styled';
export const CheckoutForm = styled.form`
  border-top: 1px solid rgba(87, 90, 93, 1);
  position: relative;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 0.5rem;
`;
export const CheckoutTitle = styled.h2`
  text-align: center;
  font-size: x-large;
  padding: 2rem 0 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

type CheckoutSubmitButtonProps = {
  disabled: boolean;
};
export const CheckoutSubmitButton = styled.button<CheckoutSubmitButtonProps>`
  width: 100%;
  height: 2.5rem;
  color: white;
  background-color: #ff3366;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 3rem;

  &:focus-visible {
    outline: none;
  }
`;
