'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import styled from '@emotion/styled';
import UserIcon from '../../components/UserIcon';
import { FaFacebook } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import RegisterForm from './RegisterForm';
import TemplateIconWrapper from '../../components/TemplateIconWrapper';
import Link from 'next/link';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: white;

  padding: 1rem;
`;

type RegisterButtonProps = {
  iconSize: number;
  iconColor: string;
};

const RegisterButton = styled.div<RegisterButtonProps>`
  width: 100%;
  height: 2.5rem;
  border-radius: 10rem;
  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & svg {
    width: ${(props) => `${props.iconSize}px`};
    height: ${(props) => `${props.iconSize}px`};
    color: ${(props) => props.iconColor};
  }
`;

const RegisterFormContainer = styled.div`
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

const LoginLink = styled(Link)`
  display: block;
  width: fit-content;
  color: #2088cd;
`;
type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <LoginPageContainer>
      <UserIcon type='add' name={'會員註冊'} size={28} />
      <TemplateIconWrapper
        width={'100%'}
        iconText='Facebook 註冊'
        onClick={() => signIn('facebook')}
      >
        <FaFacebook size={22} color={'#3b5998'} />
      </TemplateIconWrapper>
      <TemplateIconWrapper
        width={'100%'}
        iconText='Google 註冊'
        onClick={() => signIn('google')}
      >
        <FcGoogle size={22} />
      </TemplateIconWrapper>
      <TemplateIconWrapper
        width={'100%'}
        iconText='Line 註冊'
        onClick={() => signIn('line')}
      >
        <SiLine size={22} color={'#06c755'} />
      </TemplateIconWrapper>
      <RegisterFormContainer>
        <div>
          <span>或</span>
        </div>
        <RegisterForm />
        <div>
          <span>已經有帳號？</span>
          <LoginLink href='/login'>前往登入</LoginLink>
        </div>
      </RegisterFormContainer>
    </LoginPageContainer>
  );
};

export default RegisterPage;
