import React from 'react';
import ErrorMessage from './ErrorMessage';
import { Block, BlockContent, BlockTitle } from './FormBlock';
import { emailAtom } from '@/atoms';
import { useAtom } from 'jotai';

type EmailProps = {
  error?: any;
  required?: boolean;
};

const EmailBlock = (props: EmailProps) => {
  const { error, required = false } = props;
  const [email, setEmail] = useAtom(emailAtom);

  return (
    <>
      <Block error={error?._errors[0]} required={required}>
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
      {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
    </>
  );
};

export default EmailBlock;
