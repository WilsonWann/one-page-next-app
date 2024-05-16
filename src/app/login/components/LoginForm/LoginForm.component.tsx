import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '@/components/SubmitButton/SubmitButton.component';
import FormInput from '@/components/FormInput/FormInput.component';
import { LoginFormWrapper, ForgetPasswordLink } from './LoginForm.styles';

interface ILoginForm {
  email: string;
  password: string;
}

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
      <ForgetPasswordLink href={'/forgot'}>忘記密碼？</ForgetPasswordLink>
      <SubmitButton text='登入' />
    </LoginFormWrapper>
  );
};

export default LoginForm;
