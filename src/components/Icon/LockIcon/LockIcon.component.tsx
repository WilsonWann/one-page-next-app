import React from 'react';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';
import { PiLockKeyLight } from 'react-icons/pi';

type Props = {
  size?: number;
  name?: string;
};

const LockIcon = (props: Props) => {
  const { size = 16, name = undefined } = props;
  return (
    <TemplateIconWrapper iconText={name}>
      <PiLockKeyLight size={size} color={'black'} />
    </TemplateIconWrapper>
  );
};

export default LockIcon;
