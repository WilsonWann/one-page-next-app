'use client';
import React from 'react';
import AuthFormContainer from '@/components/AuthFormContainer/AuthFormContainer.component';
import AuthPageContainer from '@/components/AuthPageContainer/AuthPageContainer.component';
import LockIcon from '@/components/Icon/LockIcon/LockIcon.component';
import TextLink from '@/components/TextLink/TextLink.component';
import SendEmailForm from './components/SendEmailForm/SendEmailForm.component';

const ForgotPage = () => {
  return (
    <AuthPageContainer>
      <LockIcon name={'忘記密碼'} size={28} />
      <div
        style={{
          color: '#004f99',
          backgroundColor: '#cce6ff',
          padding: '0.5rem',
        }}
      >
        <span>
          將發送重設密碼連結到您的Email，多次重設密碼，只有最後一封Email內連結可使用。
        </span>
      </div>
      <AuthFormContainer showDivider={false}>
        <SendEmailForm />
        <div>
          <span>其他登入方式？</span>
          <TextLink href='/login'>返回登入</TextLink>
        </div>
      </AuthFormContainer>
    </AuthPageContainer>
  );
};

export default ForgotPage;
