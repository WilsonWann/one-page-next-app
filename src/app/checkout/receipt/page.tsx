'use client';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '@/components/SubmitButton/SubmitButton.component';
import ReceiptIcon from '@/components/Icon/ReceiptIcon/ReceiptIcon.component';
import { SingleValue } from 'react-select';
import IndividualCarrierInput from './components/IndividualCarrierInput/IndividualCarrierInput.component';
import OtherInputWrapper from './components/OtherInputWrapper/OtherInputWrapper.component';
import FormSelectInput from '@/components/FormSelectInput/FormSelectInput.component';
import { OptionType, ReceiptProps } from '@/types';
import { receiptAtom, receiptEmailAtom } from '@/atoms';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';

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

type CheckoutFormProps = {
  receiptType: OptionType;
  carrierType: OptionType;
  donate: string;
  heading: string;
  guiNumber: string;
  citizenIdentity: string;
  phoneBarcode: string;
  memberCarrier: string;
};
const CheckoutPage = (props: Props) => {
  const router = useRouter();

  const [email, setEmail] = useAtom(receiptEmailAtom);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormProps>({
    defaultValues: {
      receiptType: receiptTypeOptions[0],
      carrierType: carrierTypeOptions[0],
      donate: '',
      heading: '',
      guiNumber: '',
      citizenIdentity: '',
      phoneBarcode: '',
      memberCarrier: email,
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

  // console.log('🚀 ~ CheckoutPage ~ receipt:', receipt);

  const onSubmit: SubmitHandler<CheckoutFormProps> = (data) => {
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
    router.push('/checkout/payment');
  };

  return (
    <CheckoutFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <ReceiptIcon name='發票資訊' />
      <div className='bg-red-300 text-red-700'>請輸入您的發票資訊。</div>
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
