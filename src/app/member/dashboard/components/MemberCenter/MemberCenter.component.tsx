import EditIcon from '@/components/Icon/EditIcon/EditIcon.component';
import React from 'react';
import { UserProps } from '../../../types';

const MemberCenter: React.FC<UserProps> = (user) => {
  return (
    <>
      {user.name && <div>{user.name}</div>}
      {user.email && <div>{user.email}</div>}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '0.5rem',
          width: '100%',
        }}
      >
        <EditIcon
          type='edit'
          iconText={'更改會員檔案'}
          width={'100%'}
          onClick={() => {}}
        />
        <EditIcon
          type='address'
          iconText={'更改收件地址'}
          width={'100%'}
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default MemberCenter;
