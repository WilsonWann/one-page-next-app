import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import SubmitButton from '../components/SubmitButton';
import FormInput from '../components/FormInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';

interface ILoginForm {
  email: string;
  password: string;
}

type LoginSubmitButtonProps = {
  disabled: boolean;
};

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
`;

const ForgetPasswordLink = styled(Link)`
  display: block;
  width: fit-content;
  color: #2088cd;
  font-size: small;
  margin-left: auto;
`;

const LoginSubmitButton = styled.button<LoginSubmitButtonProps>`
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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='Email'
        required={true}
        inputProps={register('email', { required: true })}
        error={errors.name?.toString()}
      />
      {errors.firstName && <ErrorMessage>必須填寫</ErrorMessage>}
      <FormInput
        label={'密碼'}
        type='password'
        required={true}
        inputProps={register('password', { required: true })}
        error={errors.email?.toString()}
      />
      {errors.email && <ErrorMessage>必須填寫</ErrorMessage>}
      <ForgetPasswordLink href={'/'}>忘記密碼？</ForgetPasswordLink>
      <SubmitButton text='登入' />
    </LoginFormWrapper>
  );
};

export default LoginForm;
