import React from 'react';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

import { signInRedirect } from '@/utils/firebase/firebase.utils';
import InnerIcon from './InnerIcon.component';

export type AuthIconProps = {
  type: 'facebook' | 'google' | 'line';
  layout?: 'minimal' | 'oval';
  width?: string | number;
  iconText?: string;
  onClick?: () => void;
};

const AuthIcon: React.FC<AuthIconProps> = (props) => {
  const {
    type,
    layout = 'oval',
    width = undefined,
    iconText = undefined,
    onClick = () => signInRedirect(type),
  } = props;

  return (
    <TemplateIconWrapper
      type={layout}
      width={width}
      iconText={iconText}
      onClick={onClick}
    >
      <InnerIcon type={type} />
    </TemplateIconWrapper>
  );
};

export default AuthIcon;
