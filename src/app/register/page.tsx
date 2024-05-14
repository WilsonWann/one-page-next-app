'use client';
import React from 'react';
import { UserPlusIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import RegisterForm from './components/RegisterForm/RegisterForm.component';
import {
  RegisterPageContainer,
  RegisterFormContainer,
  LoginLink,
} from './page.styles';
import AuthIcon from '@/components/Icon/AuthIcon/AuthIcon.component';

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <UserPlusIcon name={'會員註冊'} size={28} />
      <AuthIcon type='facebook' iconText={'Facebook 註冊'} width={'100%'} />
      <AuthIcon type='google' iconText={'Google 註冊'} width={'100%'} />
      <AuthIcon type='line' iconText={'Line 註冊'} width={'100%'} />

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
    </RegisterPageContainer>
  );
};

export default RegisterPage;
