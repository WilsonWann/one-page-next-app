'use client';
import { useSession } from 'next-auth/react';
import { UserIcon } from '@/components/Icon/UserIcon/UserIcon.component';
import LoginForm from './components/LoginForm/LoginForm.component';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AuthIcon from '@/components/Icon/AuthIcon/AuthIcon.component';
import TextLink from '@/components/TextLink/TextLink.component';
import AuthFormContainer from '@/components/AuthFormContainer/AuthFormContainer.component';
import AuthPageContainer from '@/components/AuthPageContainer/AuthPageContainer.component';
import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
  createUserDocumentFromAuth,
} from '@/utils/firebase/firebase.utils';

const LoginPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log('🚀 ~ logGoogleUser ~ userDocRef:', userDocRef);
  };

  const logFacebookUser = async () => {
    const { user } = await signInWithFacebookPopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log('🚀 ~ logFacebookUser ~ userDocRef:', userDocRef);
  };

  useEffect(() => {
    if (sessionData && sessionData.user) {
      router.push('/member/dashboard');
    }
  }, [sessionData]);

  if (!sessionData || !sessionData.user) {
    return (
      <AuthPageContainer>
        <UserIcon name={'會員登入'} size={28} />
        <AuthIcon
          type='facebook'
          iconText={'Facebook 登入'}
          width={'100%'}
          onClick={logFacebookUser}
        />
        <AuthIcon
          type='google'
          iconText={'Google 登入'}
          width={'100%'}
          onClick={logGoogleUser}
        />
        <AuthIcon type='line' iconText={'Line 登入'} width={'100%'} />

        <AuthFormContainer>
          <LoginForm />
          <div>
            <span>新朋友？</span>
            <TextLink href='/register'>會員註冊</TextLink>
          </div>
        </AuthFormContainer>
      </AuthPageContainer>
    );
  }
};

export default LoginPage;
