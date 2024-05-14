'use client';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useController, useForm } from 'react-hook-form';
import SubmitButton from '@/components/SubmitButton/SubmitButton.component';
import DollarIcon from '@/components/Icon/DollarIcon/DollarIcon.component';
import FormInput from '@/components/FormInput/FormInput.component';
import { getGoodsDeliverAtom } from '@/atoms';
import { useAtom } from 'jotai';
import {
  onCreditCardStringChange,
  onExpiryDateStringChange,
  onSecurityCodeStringChange,
} from '@/helper/creditCardHelper';

const PaymentContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
`;

type PaymentFormProps = {
  payment: number;
  creditCardNumber: string;
  expiryDate: string;
  securityCode: string;
};

const Payment = () => {
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

  const { field: creditCardField, fieldState: creditCardError } = useController(
    {
      name: 'creditCardNumber',
      control: control,
      rules: { required: true, pattern: /[\d|\s]{19}/ },
    },
  );
  const { field: expiryDateField, fieldState: expiryDateError } = useController(
    {
      name: 'expiryDate',
      control: control,
      rules: { required: true, pattern: /[\d|\/|\s]{7}/ },
    },
  );
  const { field: securityCodeField, fieldState: securityCodeError } =
    useController({
      name: 'securityCode',
      control: control,
      rules: { required: true, pattern: /[\d]{3}/ },
    });

  const onSubmit = handleSubmit((data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  });
  const [creditCardString, setCreditCardString] = useState<string>('');
  const [expiryDateString, setExpiryDateString] = useState<string>('');
  const [securityCode, setSecurityCode] = useState<string>('');
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
        value={creditCardString}
        onChange={(e) => {
          const creditCardString = onCreditCardStringChange(e);
          setCreditCardString(creditCardString);
          creditCardField.onChange(e);
        }}
        label={'信用卡號'}
        type='tel'
        error={creditCardError.error?.type}
      />
      <FormInput
        required
        name='expiryDate'
        value={expiryDateString}
        onChange={(e) => {
          const expiryDateString = onExpiryDateStringChange(e);
          setExpiryDateString(expiryDateString);
          expiryDateField.onChange(e);
        }}
        label={'有效期限'}
        type='tel'
        error={expiryDateError.error?.type}
      />
      <FormInput
        required
        name='securityCode'
        value={securityCode}
        onChange={(e) => {
          const securityCodeString = onSecurityCodeStringChange(e);
          setSecurityCode(securityCodeString);
          securityCodeField.onChange(e);
        }}
        label={'安全碼'}
        type='tel'
        error={securityCodeError.error?.type}
      />
      <SubmitButton text={'確認付款'} />
    </PaymentContainer>
  );
};

export default Payment;
