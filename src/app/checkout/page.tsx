'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '../components/SubmitButton';
import FormInput from '../components/FormInput';
import ReceiptIcon from '../components/ReceiptIcon';

interface ICheckoutForm {
  email: string;
  password: string;
}

const CheckoutFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 1rem;
`;

type Props = {};

const CheckoutPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const donateInput = (
    <>
      <FormInput label={'捐贈至機構愛心碼'} inputProps={register('donate')} />
    </>
  );

  const memberCarrierInput = (
    <FormInput
      label={'電子發票寄送到Email'}
      required={true}
      inputProps={register('member_carrier', { required: 'required' })}
      // error={errors.member_carrier?.message}
    />
  );

  const [receiptType, setReceiptType] = useState('donate');
  const [otherInputWrapper, setOtherInputWrapper] =
    useState<React.ReactNode>(donateInput);

  const [individualCarrierType, setIndividualCarrierType] =
    useState('member_carrier');
  const [carrierInput, setCarrierInput] =
    useState<React.ReactNode>(memberCarrierInput);

  const onReceiptTypeChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setReceiptType(e.target.value);

  const onCarrierTypeChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setIndividualCarrierType(e.target.value);

  const identityInput = (
    <FormInput
      label={'載具編號'}
      required={true}
      inputProps={register('identity', { required: 'required' })}
      // error={errors.identity?.message}
    />
  );

  const phoneBarcodeInput = (
    <FormInput
      label={'載具編號'}
      subLabel={'/開頭，共8碼支手機條碼載具編號'}
      required={true}
      inputProps={register('phone_barcode', { required: 'required' })}
      // error={errors.phone_barcode?.message}
    />
  );

  const individualCarrierTypeSelect = (
    <>
      <select onChange={onCarrierTypeChange}>
        <option value='member_carrier'>會員載具(以Email發送發票)</option>
        <option value='citizen_identity'>自然人憑證</option>
        <option value='phone_barcode'>手機條碼</option>
      </select>
    </>
  );

  const componyInputs = (
    <>
      <FormInput
        label={'抬頭'}
        required={true}
        inputProps={register('heading', { required: 'required' })}
        // error={errors.heading?.message}
      />
      <FormInput
        label={'統一編號'}
        required={true}
        inputProps={register('gui_number', { required: 'required' })}
        // error={errors.gui_number?.message}
      />
    </>
  );

  useEffect(() => {
    switch (receiptType) {
      case 'donate':
        setOtherInputWrapper(donateInput);
        setCarrierInput(null);
        break;
      case 'individual':
        setOtherInputWrapper(individualCarrierTypeSelect);
        setCarrierInput(memberCarrierInput);
        break;
      case 'company':
        setOtherInputWrapper(componyInputs);
        setCarrierInput(null);
        break;

      default:
        break;
    }
  }, [receiptType]);

  useEffect(() => {
    switch (individualCarrierType) {
      case 'member_carrier':
        setCarrierInput(memberCarrierInput);
        break;
      case 'citizen_identity':
        setCarrierInput(identityInput);
        break;
      case 'phone_barcode':
        setCarrierInput(phoneBarcodeInput);
        break;
    }
  }, [individualCarrierType]);

  return (
    <CheckoutFormWrapper onSubmit={handleSubmit((data) => console.log(data))}>
      <ReceiptIcon name='發票資訊' />
      <select {...register('receiptType')} onChange={onReceiptTypeChange}>
        <option value='donate'>捐贈</option>
        <option value='individual'>個人</option>
        <option value='company'>公司</option>
      </select>
      {otherInputWrapper}
      {carrierInput}
      <SubmitButton text='送出' />
    </CheckoutFormWrapper>
  );
};

export default CheckoutPage;
