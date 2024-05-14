import React from 'react';
import { LuUser2 } from 'react-icons/lu';
import { LuUserPlus2 } from 'react-icons/lu';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

type Props = {
  size?: number;
  onClick?: () => void;
  name?: string;
};

const UserIcon = (props: Props) => {
  const { size = 22, onClick = () => {}, name = undefined } = props;

  const iconProps = {
    size: size,
    color: 'black',
  };

  return (
    <TemplateIconWrapper type='unset' onClick={onClick} iconText={name}>
      <LuUser2 {...iconProps} />
    </TemplateIconWrapper>
  );
};
const UserPlusIcon = (props: Props) => {
  const { size = 22, onClick = () => {}, name = undefined } = props;

  const iconProps = {
    size: size,
    color: 'black',
  };

  return (
    <TemplateIconWrapper type='unset' onClick={onClick} iconText={name}>
      <LuUserPlus2 {...iconProps} />
    </TemplateIconWrapper>
  );
};

export { UserIcon, UserPlusIcon };
