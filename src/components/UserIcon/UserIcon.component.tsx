import React from 'react';
import { UserIconWrapper } from './UserIcon.styles';
import { LuUser2 } from 'react-icons/lu';
import { LuUserPlus2 } from 'react-icons/lu';

type Props = {
  type: 'default' | 'add';
  size?: number;
  onClick?: () => void;
  name?: string;
};

const UserIcon = (props: Props) => {
  const {
    type = 'default',
    size = 22,
    onClick = () => {},
    name = undefined,
  } = props;
  if (type === 'default') {
    return (
      <UserIconWrapper size={size}>
        <LuUser2 color='black' onClick={onClick} />
        {name && <span>{name}</span>}
      </UserIconWrapper>
    );
  }

  if (type === 'add') {
    return (
      <UserIconWrapper size={size}>
        <LuUserPlus2 color='black' onClick={onClick} />
        {name && <span>{name}</span>}
      </UserIconWrapper>
    );
  }
};

export default UserIcon;
