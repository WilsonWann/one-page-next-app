'use client';
import { useSession } from 'next-auth/react';
import styled from '@emotion/styled';
import { UserIcon } from '@/components/Icon/UserIcon/UserIcon.component';

import LoginForm from './components/LoginForm/LoginForm.component';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AuthIcon from '@/components/Icon/AuthIcon/AuthIcon.component';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: white;

  padding: 1rem;
`;

const LoginFormContainer = styled.div`
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

const RegisterLink = styled(Link)`
  display: block;
  width: fit-content;
  color: #2088cd;
`;
type Props = {};

const LoginPage = (props: Props) => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionData && sessionData.user) {
      router.push('/member');
    }
  }, [sessionData]);

  if (!sessionData || !sessionData.user) {
    return (
      <LoginPageContainer>
        <UserIcon name={'會員登入'} size={28} />
        <AuthIcon type='facebook' iconText={'Facebook 登入'} width={'100%'} />
        <AuthIcon type='google' iconText={'Google 登入'} width={'100%'} />
        <AuthIcon type='line' iconText={'Line 登入'} width={'100%'} />

        <LoginFormContainer>
          <div>
            <span>或</span>
          </div>
          <LoginForm />
          <div>
            <span>新朋友？</span>
            <RegisterLink href='/register'>會員註冊</RegisterLink>
          </div>
        </LoginFormContainer>
      </LoginPageContainer>
    );
  }
};

export default LoginPage;
