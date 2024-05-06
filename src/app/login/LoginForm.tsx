import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '../components/SubmitButton';
import FormInput from '../components/FormInput';
import Link from 'next/link';

interface ILoginForm {
  email: string;
  password: string;
}

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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='Email'
        required={true}
        inputProps={register('email', { required: 'required' })}
        error={errors.email?.message}
      />
      <FormInput
        label={'密碼'}
        type='password'
        required={true}
        inputProps={register('password', { required: 'required' })}
        error={errors.password?.message}
      />
      <ForgetPasswordLink href={'/'}>忘記密碼？</ForgetPasswordLink>
      <SubmitButton text='登入' />
    </LoginFormWrapper>
  );
};

export default LoginForm;
