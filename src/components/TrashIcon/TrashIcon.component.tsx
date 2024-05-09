import React from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { TrashDiv } from './TrashIcon.styles';

type Props = {
  size?: number;
  color?: string;
  bold?: boolean;
  onClick?: () => void;
};

const TrashIcon = (props: Props) => {
  const {
    size = 16,
    color = 'black',
    bold = false,
    onClick = () => {},
  } = props;
  return (
    <TrashDiv onClick={onClick}>
      <FaRegTrashCan
        size={size}
        color={color}
        style={{
          ...(bold && { filter: 'drop-shadow(0.8px 0.8px 0px #fff)' }),
        }}
      />
    </TrashDiv>
  );
};

export default TrashIcon;
