import styled from '@emotion/styled';
import Link from 'next/link';

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
`;

export const ForgetPasswordLink = styled(Link)`
  display: block;
  width: fit-content;
  color: #2088cd;
  font-size: small;
  margin-left: auto;
`;
