import React from 'react';
import { StyledBadge } from './Badge.styles';

type Props = {
  label: string;
  color?: string;
  backgroundColor?: string;
};

const Badge = (props: Props) => {
  const { label, color = 'white', backgroundColor = 'red' } = props;
  return (
    <StyledBadge color={color} backgroundColor={backgroundColor}>
      {label}
    </StyledBadge>
  );
};

export default Badge;
