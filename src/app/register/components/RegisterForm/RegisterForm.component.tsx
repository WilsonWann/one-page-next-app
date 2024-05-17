import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '@/components/SubmitButton/SubmitButton.component';
import FormInput from '@/components/FormInput/FormInput.component';
import { RegisterFormWrapper } from './RegisterForm.styles';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '@/utils/firebase/firebase.utils';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const {
    reset,
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    console.log(data);

    const { name, email, password, confirmPassword } = data;
    console.log(
      '🚀 ~ constonSubmit:SubmitHandler<IRegisterForm>= ~ name:',
      name,
    );

    if (password !== confirmPassword) {
      setError(
        'confirmPassword',
        { message: '密碼不一致' },
        { shouldFocus: true },
      );
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserDocumentFromAuth(user, { displayName: name });
      reset();
    } catch (error: unknown) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        setError('email', { message: 'Email已被使用' }, { shouldFocus: true });
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
    <RegisterFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label={'姓名'}
        required={true}
        inputProps={register('name', { required: 'required' })}
        error={errors.name?.message}
      />
      <ErrorMessage error={errors.name} />

      <FormInput
        label={'Email'}
        required={true}
        inputProps={register('email', { required: 'required' })}
        error={errors.email?.message}
      />
      <ErrorMessage error={errors.email} />

      <FormInput
        label='密碼'
        type='password'
        required={true}
        inputProps={register('password', { required: 'required' })}
        error={errors.password?.message}
      />
      <ErrorMessage error={errors.password} />

      <FormInput
        label='密碼確認'
        type='password'
        required={true}
        inputProps={register('confirmPassword', { required: 'required' })}
        error={errors.confirmPassword?.message}
      />
      <ErrorMessage error={errors.confirmPassword} />

      <SubmitButton text={'立即註冊'} />
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
