import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

type Props = {
  size?: number;
  name?: string;
};

const LogoutIcon: React.FC<Props> = (props) => {
  const { size = 22, name = undefined } = props;
  return (
    <TemplateIconWrapper iconText={name}>
      <MdOutlineLogout size={size} color='black' />
    </TemplateIconWrapper>
  );
};

export default LogoutIcon;
