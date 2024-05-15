'use client';
import React from 'react';
import { UserPlusIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import RegisterForm from './components/RegisterForm/RegisterForm.component';
import AuthIcon from '@/components/Icon/AuthIcon/AuthIcon.component';
import TextLink from '@/components/TextLink/TextLink.component';
import AuthFormContainer from '@/components/AuthFormContainer/AuthFormContainer.component';
import AuthPageContainer from '@/components/AuthPageContainer/AuthPageContainer.component';

const RegisterPage = () => {
  return (
    <AuthPageContainer>
      <UserPlusIcon name={'會員註冊'} size={28} />
      <AuthIcon type='facebook' iconText={'Facebook 註冊'} width={'100%'} />
      <AuthIcon type='google' iconText={'Google 註冊'} width={'100%'} />
      <AuthIcon type='line' iconText={'Line 註冊'} width={'100%'} />

      <AuthFormContainer>
        <RegisterForm />
        <div>
          <span>已經有帳號？</span>
          <TextLink href='/login'>前往登入</TextLink>
        </div>
      </AuthFormContainer>
    </AuthPageContainer>
  );
};

export default RegisterPage;
