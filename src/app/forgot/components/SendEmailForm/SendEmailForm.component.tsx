import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '@/components/SubmitButton/SubmitButton.component';
import FormInput from '@/components/FormInput/FormInput.component';
import { SendFormWrapper } from './SendEmailForm.styles';

interface ISendEmailForm {
  email: string;
}

const SendEmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendEmailForm>();

  const onSubmit: SubmitHandler<ISendEmailForm> = (data) => {
    console.log(data);
  };

  return (
    <SendFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label='Email'
        required={true}
        inputProps={register('email', { required: 'required' })}
        error={errors.email?.message}
      />
      <SubmitButton text='重設密碼' />
    </SendFormWrapper>
  );
};

export default SendEmailForm;
