import React from 'react';
import { DollarIconWrapper } from './DollarIcon.styles';
import { PiCurrencyCircleDollarLight } from 'react-icons/pi';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';

type Props = {
  size?: number;
  name?: string;
};
const DollarIcon = (props: Props) => {
  const { size = 22, name = undefined } = props;
  return (
    <TemplateIconWrapper iconText={name}>
      <PiCurrencyCircleDollarLight size={size} color='black' />
    </TemplateIconWrapper>
    // <DollarIconWrapper size={size}>
    //   <PiCurrencyCircleDollarLight color='black' />
    //   {name && <span>{name}</span>}
    // </DollarIconWrapper>
  );
};

export default DollarIcon;
