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

type PasswordProps = {
  error?: any;
  required?: boolean;
};

const PasswordBlock = (props: PasswordProps) => {
  const { error, required = false } = props;
  const [password, setPassword] = useAtom(passwordAtom);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Block error={error?._errors[0]} required={required}>
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
      {error && <ErrorMessage>{error._errors[0]}</ErrorMessage>}
    </>
  );
};

export default PasswordBlock;
