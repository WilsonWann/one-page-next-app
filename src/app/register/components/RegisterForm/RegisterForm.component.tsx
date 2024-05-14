import { useForm, SubmitHandler } from 'react-hook-form';
import SubmitButton from '@/components/SubmitButton/SubmitButton.component';
import FormInput from '@/components/FormInput/FormInput.component';
import { RegisterFormWrapper } from './RegisterForm.styles';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

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
        label={'姓名'}
        required={true}
        inputProps={register('name', { required: 'required' })}
        error={errors.name?.message}
      />
      <FormInput
        label={'Email'}
        required={true}
        inputProps={register('email', { required: 'required' })}
        error={errors.email?.message}
      />
      <FormInput
        label='密碼'
        type='password'
        required={true}
        inputProps={register('password', { required: 'required' })}
        error={errors.password?.message}
      />
      <SubmitButton text={'立即註冊'} />
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
