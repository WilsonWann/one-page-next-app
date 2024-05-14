import React from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

type Props = {
  size?: number;
  color?: string;
  onClick?: () => void;
};

const TrashIcon = (props: Props) => {
  const { size = 16, color = 'black', onClick = () => {} } = props;
  return (
    <TemplateIconWrapper bg={'lightgray'} type='circle' onClick={onClick}>
      <FaRegTrashCan size={size} color={color} />
    </TemplateIconWrapper>
  );
};

export default TrashIcon;
