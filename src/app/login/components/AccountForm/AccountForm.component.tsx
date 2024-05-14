import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const AccountForm = () => {
  const { data: sessionData } = useSession();

  if (!sessionData || !sessionData.user) return null;

  return (
    <div>
      <div>
        <div>user_icon 會員中心</div>
        <div>姓名：{sessionData.user.name}</div>
        <div>Email：{sessionData.user.email}</div>
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
    </div>
  );
};

export default AccountForm;
