import React from 'react';
import styled from '@emotion/styled';
import { LuUser2 } from 'react-icons/lu';
import { LuUserPlus2 } from 'react-icons/lu';

type UserIconWrapperProps = {
  size?: number;
};
const UserIconWrapper = styled.div<UserIconWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & > svg {
    height: ${({ size }) => size ?? 24}px;
    width: ${({ size }) => size ?? 24}px;
  }
  & > span {
    font-size: ${({ size }) => (size ? size * 0.8 : 24 * 0.8)}px;
  }
`;
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
