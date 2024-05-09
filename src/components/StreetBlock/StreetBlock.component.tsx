import React from 'react';
import {
  Block,
  BlockTitle,
  BlockContent,
} from '@/components/FormBlock/FormBlock.component';
import { useAtomValue, useSetAtom } from 'jotai';
import { setStreetAtom, getStreetAtom } from '@/atoms';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';

type Props = {
  error?: any;
  required?: boolean;
};

const StreetBlock = (props: Props) => {
  const { error, required = false } = props;
  const street = useAtomValue(getStreetAtom);
  const setStreet = useSetAtom(setStreetAtom);
  return (
    <>
      <Block error={error?._errors[0]} required={required}>
        <BlockTitle htmlFor={'street'}>街道地址</BlockTitle>
        <BlockContent>
          <input
            id='street'
            type='text'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </BlockContent>
      </Block>
      {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
    </>
  );
};

export default StreetBlock;
