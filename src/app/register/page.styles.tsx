import styled from '@emotion/styled';
import Link from 'next/link';

export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: white;

  padding: 1rem;
`;

// type RegisterButtonProps = {
//   iconSize: number;
//   iconColor: string;
// };

// export const RegisterButton = styled.div<RegisterButtonProps>`
//   width: 100%;
//   height: 2.5rem;
//   border-radius: 10rem;
//   background-color: white;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   gap: 0.5rem;

//   & svg {
//     width: ${(props) => `${props.iconSize}px`};
//     height: ${(props) => `${props.iconSize}px`};
//     color: ${(props) => props.iconColor};
//   }
// `;

export const RegisterFormContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;

  & > div:first-of-type {
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
  }

  & > div:last-child {
    font-size: small;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const LoginLink = styled(Link)`
  display: block;
  width: fit-content;
  color: #2088cd;
`;
