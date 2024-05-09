'use client';
import React from 'react';
import { Title } from './DisplayTitle.styles';

type Props = {
  title: string;
  icon?: React.ReactNode;
};

const DisplayTitle = (props: Props) => {
  const { title, icon = null } = props;
  if (!icon) {
    return <Title>{title}</Title>;
  }

  return (
    <Title>
      {icon}
      {title}
    </Title>
  );
};

export default DisplayTitle;
