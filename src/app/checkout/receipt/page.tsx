'use client';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../components/SubmitButton';
import ReceiptIcon from '../../components/ReceiptIcon';
import { SingleValue } from 'react-select';
import IndividualCarrierInput from './IndividualCarrierInput';
import OtherInputWrapper from './OtherInputWrapper';
import FormSelectInput from '../../components/FormSelectInput';
import { OptionType, ReceiptProps } from '@/types';
import { receiptAtom } from '@/atoms';
import { useAtom } from 'jotai';
import { redirect } from 'next/navigation';

const receiptTypeOptions: OptionType[] = [
  { value: 'donate', label: '捐贈' },
  { value: 'individual', label: '個人' },
  { value: 'company', label: '公司' },
];

const carrierTypeOptions: OptionType[] = [
  { value: 'memberCarrier', label: '會員載具(以Email發送發票)' },
  { value: 'citizenIdentity', label: '自然人憑證' },
  { value: 'phoneBarcode', label: '手機條碼' },
];

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
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      receiptType: receiptTypeOptions[0],
      carrierType: carrierTypeOptions[0],
      donate: '',
      heading: '',
      guiNumber: '',
      citizenIdentity: '',
      phoneBarcode: '',
      memberCarrier: '',
    },
  });

  const [receipt, setReceipt] = useAtom(receiptAtom);

  const [receiptType, setReceiptType] = useState<
    SingleValue<OptionType> | undefined
  >();
  // receiptTypeOptions[0],

  const [carrierType, setCarrierType] = useState<
    SingleValue<OptionType> | undefined
  >();
  // carrierTypeOptions[0],

  console.log('🚀 ~ CheckoutPage ~ receipt:', receipt);

  const onSubmit = handleSubmit((data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
    const formData: ReceiptProps = {
      receiptType: data.receiptType.value,
    };

    if (data.receiptType.value === 'donate') {
      formData['donate'] = data.donate;
    }

    if (data.receiptType.value === 'company') {
      formData['heading'] = data.heading;
      formData['guiNumber'] = data.guiNumber;
    }

    if (data.receiptType.value === 'individual') {
      //* route B, with carrierType
      formData['carrierType'] = data.carrierType.value;

      if (data.carrierType.value === 'citizenIdentity')
        formData['citizenIdentity'] = data.citizenIdentity;

      if (data.carrierType.value === 'memberCarrier')
        formData['memberCarrier'] = data.memberCarrier;

      if (data.carrierType.value === 'phoneBarcode')
        formData['phoneBarcode'] = data.phoneBarcode;
    }

    setReceipt(formData);
    redirect();
  });

  return (
    <CheckoutFormWrapper onSubmit={onSubmit}>
      <ReceiptIcon name='發票資訊' />
      <div className='bg-red-300 text-red-700'>請輸入您的發票資訊</div>
      <FormSelectInput
        name='receiptType'
        required={true}
        label='發票類型'
        control={control}
        options={receiptTypeOptions}
        value={receiptType}
        setState={setReceiptType}
      />
      <OtherInputWrapper
        control={control}
        register={register}
        errors={errors}
        receiptType={receiptType}
        carrierType={carrierType}
        carrierTypeOptions={carrierTypeOptions}
        setCarrierType={setCarrierType}
      />
      <IndividualCarrierInput
        control={control}
        register={register}
        errors={errors}
        receiptType={receiptType}
        carrierType={carrierType}
      />
      <SubmitButton text='送出' />
    </CheckoutFormWrapper>
  );
};

export default CheckoutPage;
