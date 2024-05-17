import React from 'react';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import {
  Block,
  BlockContent,
  BlockTitle,
} from '@/components/FormBlock/FormBlock.component';
import { emailAtom } from '@/atoms';
import { useAtom } from 'jotai';
import { ErrorProps } from '@/types';

type EmailProps = {
  error?: ErrorProps;
  required?: boolean;
};

const EmailBlock = (props: EmailProps) => {
  const { error, required = false } = props;
  const [email, setEmail] = useAtom(emailAtom);

  return (
    <>
      <Block error={error} required={required}>
        <BlockTitle htmlFor={'email'}>Email</BlockTitle>
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

export default EmailBlock;
