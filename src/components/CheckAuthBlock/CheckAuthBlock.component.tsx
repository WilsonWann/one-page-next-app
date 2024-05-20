import React from 'react';
import { useSession } from 'next-auth/react';
import { UserIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import { useRouter } from 'next/navigation';
import {
  Block,
  BlockContent,
  BlockTitle,
} from '@/components/FormBlock/FormBlock.component';

import AuthIcon from '../Icon/AuthIcon/AuthIcon.component';

type Props = {
  showTitle?: boolean;
  suppressBorder?: boolean;
};

const CheckAuthBlock = (props: Props) => {
  const { showTitle = true, suppressBorder = false } = props;
  const router = useRouter();
  const { data: sessionData } = useSession();
  if (!sessionData || !sessionData.user) {
    return (
      <Block align={'center'} gap={'0.5rem'} suppressBorder={suppressBorder}>
        {showTitle && <BlockTitle align='center'>會員登入</BlockTitle>}
        <BlockContent>
          <AuthIcon type='facebook' />
          <AuthIcon type='google' />
          <AuthIcon type='line' />
          <AuthIcon type='email' onClick={() => router.push('/login')} />
        </BlockContent>
      </Block>
    );
  }
  return (
    <Block align={'center'} direction={'row'} gap={'1rem'}>
      <BlockContent>
        <span>已登入會員 </span>
        <UserIcon name={sessionData?.user?.name ?? ''} />
      </BlockContent>
    </Block>
  );
};

export default CheckAuthBlock;
