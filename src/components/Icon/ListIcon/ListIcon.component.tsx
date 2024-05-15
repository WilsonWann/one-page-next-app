import React from 'react';
import TemplateIconWrapper from '../TemplateIconWrapper/TemplateIconWrapper.component';
import { FaListUl } from 'react-icons/fa';

type Props = {
  size?: number;
  name?: string;
};

const ListIcon = (props: Props) => {
  const { size = 16, name = undefined } = props;
  return (
    <TemplateIconWrapper iconText={name}>
      <FaListUl size={size} color={'black'} />
    </TemplateIconWrapper>
  );
};

export default ListIcon;
