import React from 'react';
import {
  Block,
  BlockTitle,
  BlockContent,
} from '@/components/FormBlock/FormBlock.component';
import { useAtom } from 'jotai';
import { receiptNameAtom } from '@/atoms';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import { ErrorProps } from '@/types';

type Props = {
  error?: ErrorProps;
  required?: boolean;
};

const ReceiptNameBlock = (props: Props) => {
  const { error, required = false } = props;
  const [name, setName] = useAtom(receiptNameAtom);
  return (
    <>
      <Block error={error} required={required}>
        <BlockTitle htmlFor={'recipient'}>
          收件人<span>請填寫姓名</span>
        </BlockTitle>
        <BlockContent>
          <input
            id='recipient'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </BlockContent>
      </Block>
      <ErrorMessage error={error} />
    </>
  );
};

export default ReceiptNameBlock;
