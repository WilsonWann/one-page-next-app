import React from 'react';
import { ReceiptIconWrapper } from './ReceiptIcon.styles';
import { TbReceipt2 } from 'react-icons/tb';

type Props = {
  size?: number;
  name?: string;
};
const ReceiptIcon = (props: Props) => {
  const { size = 22, name = undefined } = props;
  return (
    <ReceiptIconWrapper size={size}>
      <TbReceipt2 color='black' />
      {name && <span>{name}</span>}
    </ReceiptIconWrapper>
  );
};

export default ReceiptIcon;
