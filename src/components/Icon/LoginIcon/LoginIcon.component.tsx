import React from 'react';
import { MdOutlineLogin } from 'react-icons/md';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

type Props = {
  size?: number;
  name?: string;
};

const LoginIcon: React.FC<Props> = (props) => {
  const { size = 22, name = undefined } = props;
  return (
    <TemplateIconWrapper iconText={name}>
      <MdOutlineLogin size={size} color='black' />
    </TemplateIconWrapper>
  );
};

export default LoginIcon;
