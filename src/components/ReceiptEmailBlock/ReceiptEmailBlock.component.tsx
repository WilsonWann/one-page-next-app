import React from 'react';
import {
  Block,
  BlockTitle,
  BlockContent,
} from '@/components/FormBlock/FormBlock.component';
import { useAtom } from 'jotai';
import { receiptEmailAtom } from '@/atoms';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import { ErrorProps } from '@/types';

type Props = {
  error?: ErrorProps;
  required?: boolean;
};

const ReceiptEmailBlock = (props: Props) => {
  const { error, required = false } = props;
  const [email, setEmail] = useAtom(receiptEmailAtom);
  return (
    <>
      <Block error={error} required={required}>
        <BlockTitle htmlFor={'email'}>
          電子發票寄送信箱(無開立紙本發票)<span>建議填寫Yahoo以外的信箱</span>
        </BlockTitle>
        <BlockContent>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </BlockContent>
      </Block>
      <ErrorMessage error={error} />
    </>
  );
};

export default ReceiptEmailBlock;
