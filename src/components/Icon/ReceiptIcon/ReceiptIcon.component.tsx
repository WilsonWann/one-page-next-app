import React from 'react';
import { ReceiptIconWrapper } from './ReceiptIcon.styles';
import { TbReceipt2 } from 'react-icons/tb';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

type Props = {
  size?: number;
  name?: string;
};
const ReceiptIcon = (props: Props) => {
  const { size = 22, name = undefined } = props;
  return (
    <TemplateIconWrapper iconText={name}>
      <TbReceipt2 size={size} color='black' />
    </TemplateIconWrapper>
  );
};

export default ReceiptIcon;
