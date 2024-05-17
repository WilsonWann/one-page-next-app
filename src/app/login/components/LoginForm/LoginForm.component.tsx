import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '@/components/SubmitButton/SubmitButton.component';
import FormInput from '@/components/FormInput/FormInput.component';
import { LoginFormWrapper, ForgetPasswordLink } from './LoginForm.styles';
import { signInAuthUserWithEmailAndPassword } from '@/utils/firebase/firebase.utils';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    reset,
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    console.log(data);

    const { email, password } = data;

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(
        '🚀 ~ const onSubmit:SubmitHandler<ILoginForm> = ~ response:',
        response,
      );

      // await createUserDocumentFromAuth(user, { displayName: name });
      reset();
    } catch (error: unknown) {
      if ((error as AuthError).code === AuthErrorCodes.INVALID_EMAIL) {
        setError('email', { message: 'Email錯誤' });
        console.log('🚀 ~ user creation encountered an error', error);
      }
      if ((error as AuthError).code === AuthErrorCodes.INVALID_IDP_RESPONSE) {
        setError('email', { message: 'Email或密碼錯誤' });
        setError('password', { message: 'Email或密碼錯誤' });
        console.log('🚀 ~ user creation encountered an error', error);
      }
      if (typeof error === 'string') {
        console.log('🚀 ~ user creation encountered an error', error);
      } else if (error instanceof Error) {
        console.log('🚀 ~ user creation encountered an error', error.message);
      } else {
        console.log('🚀 ~ user creation encountered an error', error);
        // handle other types of errors
      }
    }
  };

  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='Email'
        required
        inputProps={register('email', { required: 'required' })}
        error={errors.email?.message}
      />
      <ErrorMessage error={errors.email} />

      <FormInput
        label={'密碼'}
        type='password'
        required
        inputProps={register('password', { required: 'required' })}
        error={errors.password?.message}
      />
      <ErrorMessage error={errors.password} />

      <ForgetPasswordLink href={'/forgot'}>忘記密碼？</ForgetPasswordLink>
      <SubmitButton text='登入' />
    </LoginFormWrapper>
  );
};

export default LoginForm;
