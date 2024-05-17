import React, { useState } from 'react';
import {
  Block,
  BlockContent,
  BlockTitle,
} from '@/components/FormBlock/FormBlock.component';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { useAtom } from 'jotai';
import { passwordAtom } from '@/atoms';
import { ErrorProps } from '@/types';

type PasswordProps = {
  error?: ErrorProps;
  required?: boolean;
};

const PasswordBlock = (props: PasswordProps) => {
  const { error, required = false } = props;
  const [password, setPassword] = useAtom(passwordAtom);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Block error={error} required={required}>
        <BlockTitle htmlFor={'password'}>密碼</BlockTitle>
        <BlockContent>
          <input
            id='password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <MdOutlineVisibilityOff onClick={() => setShowPassword(false)} />
          ) : (
            <MdOutlineVisibility onClick={() => setShowPassword(true)} />
          )}
        </BlockContent>
      </Block>
      <ErrorMessage error={error} />
    </>
  );
};

export default PasswordBlock;
