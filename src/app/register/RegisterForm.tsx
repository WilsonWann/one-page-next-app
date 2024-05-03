import styled from '@emotion/styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '../components/SubmitButton';
import FormInput from '../components/FormInput';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

const RegisterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
`;

const ErrorMessage = styled.div`
  margin-bottom: 0.5rem;
  color: red;
  font-size: medium;
`;

//! TODO: next-auth email login and register
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    console.log(data);
  };

  return (
    <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='姓名'
        required={true}
        inputProps={register('name', { required: true })}
        error={errors.name?.toString()}
      />
      {errors.name && <ErrorMessage>必須填寫</ErrorMessage>}
      <FormInput
        label={'Email'}
        required={true}
        inputProps={register('email', { required: true })}
        error={errors.email?.toString()}
      />
      {errors.email && <ErrorMessage>必須填寫</ErrorMessage>}
      <FormInput
        label='密碼'
        type='password'
        required={true}
        inputProps={register('password', { required: true })}
        error={errors.password?.toString()}
      />
      {errors.password && <ErrorMessage>必須填寫</ErrorMessage>}
      <SubmitButton text={'立即註冊'} />
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
