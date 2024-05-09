import React from 'react';
import FormInput from '@/components/FormInput/FormInput.component';
import { SingleValue } from 'react-select';
import { OptionType } from '@/types';
import FormSelectInput from '@/components/FormSelectInput/FormSelectInput.component';

type Props = {
  control: any;
  register: any;
  errors: any;
  receiptType: SingleValue<OptionType> | undefined;
  carrierType: SingleValue<OptionType> | undefined;
  carrierTypeOptions: OptionType[];
  setCarrierType: React.Dispatch<
    React.SetStateAction<SingleValue<OptionType> | undefined>
  >;
};

const OtherInputWrapper = (props: Props) => {
  const {
    control,
    register,
    errors,
    receiptType,
    carrierType,
    carrierTypeOptions,
    setCarrierType,
  } = props;

  if (!receiptType) return null;

  if (receiptType.value === 'donate') {
    const donateInput = (
      <>
        <FormInput
          label={'捐贈至機構愛心碼'}
          inputProps={(register('donate'), { pattern: /^[0-9]{3,7}$/ })}
          error={errors.donate?.type}
        />
        <div className='flex flex-col justify-between items-start'>
          <span>未填寫愛心碼則會將發票捐給以下機構：</span>
          <span>336 財團法人天使心家族社會福利基金會</span>
          <span>2911811 財團法人良顯堂社會福利基金會</span>
          <span>003 財團法人台灣安心家庭關懷協會</span>
        </div>
      </>
    );
    return donateInput;
  }

  if (receiptType.value === 'individual') {
    const individualCarrierTypeSelect = (
      <FormSelectInput
        name='carrierType'
        required={true}
        label='載具類型'
        control={control}
        options={carrierTypeOptions}
        value={carrierType}
        setState={setCarrierType}
      />
    );
    return individualCarrierTypeSelect;
  }

  if (receiptType.value === 'company') {
    const componyInputs = (
      <>
        <FormInput
          label={'抬頭'}
          required={true}
          inputProps={register('heading', { required: 'required' })}
          error={errors.heading?.type}
        />
        <FormInput
          label={'統一編號'}
          required={true}
          inputProps={register('guiNumber', {
            required: 'required',
            pattern: /^[0-9]{8}$/,
          })}
          error={errors.guiNumber?.type}
        />
      </>
    );
    return componyInputs;
  }

  return null;
};

export default OtherInputWrapper;
