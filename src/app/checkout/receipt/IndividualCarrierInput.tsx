import React from 'react';
import FormInput from '../../../components/FormInput';
import ImageBlock from '../../../components/ImageBlock';
import identityCarrier from '@/assets/identityCarrier.png';
import phoneCarrier from '@/assets/phoneCarrier.png';
import { SingleValue } from 'react-select';
import { OptionType } from '@/types';

type Props = {
  control: any;
  register: any;
  errors: any;
  receiptType: SingleValue<OptionType> | undefined;
  carrierType: SingleValue<OptionType> | undefined;
};

const IndividualCarrierInput = (props: Props) => {
  const { control, register, errors, receiptType, carrierType } = props;

  if (!receiptType || receiptType.value !== 'individual' || !carrierType)
    return null;
  if (carrierType.value === 'memberCarrier') {
    const memberCarrierInput = (
      <>
        <FormInput
          label={'電子發票寄送到Email'}
          required={true}
          inputProps={register('memberCarrier', {
            required: 'required',
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          error={errors.memberCarrier?.type}
        />
        <div className='flex flex-col justify-between items-start'>
          建議您使用Email寄送，電子發票與實體發票具有相同效力，且可隨時上網查詢。
        </div>
      </>
    );
    return memberCarrierInput;
  }

  if (carrierType.value === 'citizenIdentity') {
    const identityInput = (
      <>
        <FormInput
          label={'載具編號'}
          subLabel={'自然人憑證右下角，2碼英文字母+14碼數字之編號'}
          required={true}
          inputProps={register('citizenIdentity', {
            required: 'required',
            pattern: /^[A-Z]{2}[0-9]{14}$/,
          })}
          error={errors.citizenIdentity?.type}
        />
        {/* <ImageBlock
          image={identityCarrier}
          customType={'width'}
          customWidth={'100%'}
        /> */}
      </>
    );
    return identityInput;
  }

  if (carrierType.value === 'phoneBarcode') {
    const phoneBarcodeInput = (
      <>
        <FormInput
          label={'載具編號'}
          subLabel={'/開頭，共8碼支手機條碼載具編號'}
          required={true}
          inputProps={register('phoneBarcode', {
            required: 'required',
            pattern: /^\/[0-9A-Z.+-]{7}$/,
          })}
          error={errors.phoneBarcode?.type}
        />
        {/* <ImageBlock
          image={phoneCarrier}
          customType={'width'}
          customWidth={'100%'}
        /> */}
      </>
    );
    return phoneBarcodeInput;
  }

  return null;
};

export default IndividualCarrierInput;
