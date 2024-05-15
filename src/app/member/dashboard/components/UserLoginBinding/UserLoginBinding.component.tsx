import AuthIcon from '@/components/Icon/AuthIcon/AuthIcon.component';
import EditIcon from '@/components/Icon/EditIcon/EditIcon.component';
import React from 'react';
import {
  CHECK_IMAGE_STRING,
  UserBindingProps,
  UserProps,
} from '../../../types';

const UserLoginBinding: React.FC<UserProps & UserBindingProps> = ({
  name,
  email,
  image,
  type,
}) => {
  return (
    <div>
      {image?.includes(
        CHECK_IMAGE_STRING[
          type.toUpperCase() as keyof typeof CHECK_IMAGE_STRING
        ],
      ) ? (
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AuthIcon type={type} layout='minimal' />
            {name}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              gap: '0.5rem',
            }}
          >
            <EditIcon iconText={'取消綁定'} width={'100%'} onClick={() => {}} />
            <EditIcon iconText={'重新綁定'} width={'100%'} onClick={() => {}} />
          </div>
        </div>
      ) : (
        <AuthIcon
          type={type}
          iconText={`綁定 ${type.charAt(0).toUpperCase()}${type.substring(
            1,
          )} 註冊`}
          width={'100%'}
        />
      )}
    </div>
  );
};

export default UserLoginBinding;
