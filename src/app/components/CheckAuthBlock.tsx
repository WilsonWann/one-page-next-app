import React from 'react';
import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';
import UserIcon from './UserIcon';
import { Block, BlockContent, BlockTitle } from './FormBlock';
import FacebookIcon from './FacebookIcon';
import { FaFacebook } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

type Props = {};

const CheckAuthBlock = (props: Props) => {
  const { data: sessionData } = useSession();
  if (!sessionData || !sessionData.user) {
    return (
      <Block align={'center'} gap={'0.5rem'}>
        <BlockTitle align='center'>會員登入</BlockTitle>
        <BlockContent>
          <FacebookIcon iconText='Facebook' onClick={() => signIn('facebook')}>
            <FaFacebook size={22} color={'#3b5998'} />
          </FacebookIcon>
          <FacebookIcon iconText='google' onClick={() => signIn('google')}>
            <FcGoogle size={22} />
          </FacebookIcon>
          <FacebookIcon iconText='Line' onClick={() => signIn('line')}>
            <SiLine size={22} color={'#06c755'} />
          </FacebookIcon>
          <FacebookIcon iconText='Email' onClick={() => signIn('email')}>
            <MdOutlineEmail size={22} color={'#000000'} />
          </FacebookIcon>
        </BlockContent>
      </Block>
    );
  }
  return (
    <Block align={'center'} direction={'row'} gap={'1rem'}>
      <BlockContent>
        <span>已登入會員 </span>
        <UserIcon type='default' name={sessionData?.user?.name ?? ''} />
      </BlockContent>
    </Block>
  );
};

export default CheckAuthBlock;
