'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import Layout from '../components/Layout/Layout.component';
import LayoutBlock from '../components/LayoutBlock/LayoutBlock.component';
import LockIcon from '@/components/Icon/LockIcon/LockIcon.component';
import NavLink from '@/components/NavLink/NavLink.component';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '@/components/SubmitButton/SubmitButton.component';
import FormInput from '@/components/FormInput/FormInput.component';
import ChangePwdForm from './components/ChangePwdForm/ChangePwdForm.component';

type ChangePwdProps = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePwdPage = (props: ChangePwdProps) => {
  const { data: sessionData } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePwdProps>();
  console.log('🚀 ~ DashboardPage ~ sessionData:', sessionData);

  const user = sessionData?.user;
  if (!user) return null;

  const onSubmit: SubmitHandler<ChangePwdProps> = (data) => console.log(data);

  return (
    <Layout>
      <LayoutBlock>
        <LockIcon size={42} name='更改密碼' />
        <div
          style={{
            color: '#004f99',
            backgroundColor: '#cce6ff',
            padding: '0.5rem',
          }}
        >
          <span>如您為社群登入，沒有設定過密碼，請點擊</span>
          <NavLink
            href='/forgot'
            color='blue'
            style={{ color: '#2088cd', textDecoration: 'underline' }}
          >
            忘記密碼
          </NavLink>
          <span>，會將重設連結寄到您的Email。</span>
        </div>
        <ChangePwdForm onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label='舊密碼'
            required={true}
            type='password'
            inputProps={register('oldPassword', {
              required: true,
            })}
            error={errors.oldPassword?.type}
          />
          <FormInput
            label='新密碼'
            required={true}
            type='password'
            inputProps={register('newPassword', {
              required: true,
            })}
            error={errors.newPassword?.type}
          />
          <FormInput
            label='再次輸入新密碼'
            required={true}
            type='password'
            inputProps={register('confirmPassword', {
              required: true,
            })}
            error={errors.confirmPassword?.type}
          />
          <SubmitButton text='送出' />
        </ChangePwdForm>
      </LayoutBlock>
    </Layout>
  );
};

export default ChangePwdPage;
