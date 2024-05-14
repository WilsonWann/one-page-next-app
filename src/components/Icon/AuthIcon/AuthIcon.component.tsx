import React from 'react';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

import { signIn } from 'next-auth/react';
import InnerIcon from './InnerIcon.component';

export type AuthIconProps = {
  type: 'facebook' | 'google' | 'line' | 'email';
  width?: string | number;
  iconText?: string;
  onClick?: () => void;
};

const AuthIcon: React.FC<AuthIconProps> = (props) => {
  const {
    type,
    width = undefined,
    iconText = 'Facebook',
    onClick = () => signIn(type),
  } = props;

  return (
    <TemplateIconWrapper
      type='oval'
      width={width}
      iconText={iconText}
      onClick={onClick}
    >
      <InnerIcon type={type} />
    </TemplateIconWrapper>
  );
};

export default AuthIcon;
