'use client';
import React from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../../components/SubmitButton';
import DollarIcon from '../../../components/DollarIcon';
import FormInput from '@/components/FormInput';
import { getGoodsDeliverAtom } from '@/atoms';
import { useAtom } from 'jotai';

const PaymentContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
`;

type Props = {};

type PaymentFormProps = {
  payment: number;
  creditCardNumber: string;
  expiryDate: string;
  securityCode: string;
};

const Payment = (props: Props) => {
  const [goodsDeliver] = useAtom(getGoodsDeliverAtom);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormProps>({
    defaultValues: {
      payment: goodsDeliver.subtotal,
      creditCardNumber: '',
      expiryDate: '',
      securityCode: '',
    },
  });

  // console.log('🚀 ~ Payment ~ goodsDeliver.subtotal:', goodsDeliver.subtotal);

  const onSubmit = handleSubmit((data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  });

  return (
    <PaymentContainer onSubmit={onSubmit}>
      <DollarIcon name='付款' />
      <div className='bg-red-300 text-red-700'>請輸入您的付款資訊。</div>
      <FormInput
        label={'付款金額'}
        disabled
        inputProps={register('payment', {
          pattern: /^[0-9]*$/,
        })}
        error={errors.payment?.type}
      />
      <FormInput
        required
        name='creditCardNumber'
        label={'信用卡號'}
        type='creditCard'
        control={control}
      />
      <FormInput
        required
        label={'有效期限'}
        type='expiryDate'
        control={control}
      />
      <FormInput
        required
        label={'安全碼'}
        type='securityCode'
        control={control}
      />
      <SubmitButton text={'確認付款'} />
    </PaymentContainer>
  );
};

export default Payment;
