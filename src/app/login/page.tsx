'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import styled from '@emotion/styled';
import UserIcon from '../components/UserIcon';
import TemplateIconWrapper from '../components/TemplateIconWrapper';
import { FaFacebook } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import LoginForm from './LoginForm';
import Link from 'next/link';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: white;

  padding: 1rem;
`;

const LoginFormContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;

  & > div:first-child {
    position: relative;
    text-align: center;
    & > span {
      position: relative;
      display: inline-block;
      width: 3rem;
      background-color: white;
      text-align: center;
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.07);
      z-index: 0;
    }
  }

  & > div:last-child {
    font-size: small;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const RegisterLink = styled(Link)`
  display: block;
  width: fit-content;
  color: #2088cd;
`;
type Props = {};

const LoginPage = (props: Props) => {
  const { data: sessionData } = useSession();

  if (!sessionData || !sessionData.user) {
    return (
      <LoginPageContainer>
        <UserIcon type='default' name={'會員登入'} size={28} />
        <TemplateIconWrapper
          width={'100%'}
          iconText='Facebook 登入'
          onClick={() => signIn('facebook')}
        >
          <FaFacebook size={22} color={'#3b5998'} />
        </TemplateIconWrapper>
        <TemplateIconWrapper
          width={'100%'}
          iconText='Google 登入'
          onClick={() => signIn('google')}
        >
          <FcGoogle size={22} />
        </TemplateIconWrapper>
        <TemplateIconWrapper
          width={'100%'}
          iconText='Line 登入'
          onClick={() => signIn('line')}
        >
          <SiLine size={22} color={'#06c755'} />
        </TemplateIconWrapper>

        <LoginFormContainer>
          <div>
            <span>或</span>
          </div>
          <LoginForm />
          <div>
            <span>新朋友？</span>
            <RegisterLink href='/register'>會員註冊</RegisterLink>
          </div>
        </LoginFormContainer>
      </LoginPageContainer>
    );
  }

  return (
    // TODO: 顯示已登入會員
    <>
      <div>
        <button>user_icon 會員中心</button>
        <button>order_icon 我的訂單</button>
        <button>point_icon 會員點數</button>
        <button>lock_icon 更改密碼</button>
        <button>logout_icon 登出</button>
      </div>
      <div>
        <div>user_icon 會員中心</div>
        <div>$username</div>
        <div>$email</div>
        <div>
          <button>edit_icon 更改會員檔案</button>
          <button>truck_icon 更改收件地址</button>
        </div>
      </div>
      <div>
        <div>login_icon 登入綁定</div>
        <div>綁定 $facebook_login 登入</div>
        {sessionData.user ? (
          <div>
            <div>line_icon $username</div>
            <div>
              <button>取消綁定</button>
              <button>重新綁定</button>
            </div>
          </div>
        ) : (
          <div>綁定 $google_login 登入</div>
        )}
        <div>綁定 $line_login 登入</div>
        <div>
          <span>edit_icon 更改會員檔案</span>
          <span>truck_icon 更改收件地址</span>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
