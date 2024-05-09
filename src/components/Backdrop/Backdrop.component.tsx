'use client';
import React from 'react';
import { BackdropDiv } from './Backdrop.styles';

type Props = {
  active: boolean;
  onClick?: () => void;
  backgroundColor?: string;
  zIndex?: number;
};

const Backdrop = (props: Props) => {
  const {
    active,
    onClick = () => {},
    backgroundColor = 'rgba(0, 0, 0, 0.8)',
    zIndex = 100000,
  } = props;
  return (
    <BackdropDiv
      active={active}
      onClick={onClick}
      backgroundColor={backgroundColor}
      zIndex={zIndex}
    />
  );
};

export default Backdrop;
