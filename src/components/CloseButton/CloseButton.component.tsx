import React from 'react';
import { IoClose } from 'react-icons/io5';
import { CloseLabel } from './CloseButton.styles';

type Props = {
  htmlFor?: string;
  onClick?: () => void;
};

const CloseButton = (props: Props) => {
  const { htmlFor = '', onClick = () => {} } = props;

  return (
    <CloseLabel htmlFor={htmlFor} onClick={onClick}>
      <IoClose color='black' size={20} />
    </CloseLabel>
  );
};

export default CloseButton;
