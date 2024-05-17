import React, { useEffect } from 'react';
import {
  Block,
  BlockTitle,
  BlockContent,
} from '@/components/FormBlock/FormBlock.component';
import { useAtomValue, useSetAtom } from 'jotai';
import { setStreetAtom, getStreetAtom } from '@/atoms';
// import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import { storage_AddressAtom } from '@/atoms/storageAtoms';
import { ErrorProps } from '@/types';

type Props = {
  error?: ErrorProps;
  required?: boolean;
};

const StreetBlock = (props: Props) => {
  const favoriteAddress = useAtomValue(storage_AddressAtom);
  const { error, required = false } = props;
  const street = useAtomValue(getStreetAtom);
  const setStreet = useSetAtom(setStreetAtom);

  useEffect(() => {
    setStreet(favoriteAddress?.street || '');
  }, [favoriteAddress]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setStreet(event.target.value);
  };

  return (
    <>
      <Block error={error} required={required}>
        <BlockTitle htmlFor={'street'}>街道地址</BlockTitle>
        <BlockContent>
          <input
            id='street'
            type='text'
            value={street}
            onChange={handleInputChange}
          />
        </BlockContent>
      </Block>
      {/* <ErrorMessage error={error._errors[0]} /> */}
    </>
  );
};

export default StreetBlock;
