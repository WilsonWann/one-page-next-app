import React from 'react';
import { DollarIconWrapper } from './DollarIcon.styles';
import { PiCurrencyCircleDollarLight } from 'react-icons/pi';

type Props = {
  size?: number;
  name?: string;
};
const DollarIcon = (props: Props) => {
  const { size = 22, name = undefined } = props;
  return (
    <DollarIconWrapper size={size}>
      <PiCurrencyCircleDollarLight color='black' />
      {name && <span>{name}</span>}
    </DollarIconWrapper>
  );
};

export default DollarIcon;
