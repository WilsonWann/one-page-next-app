import React from 'react';
import { ListWrapper } from './ListLayout.styles';

type Props = {
  children: React.ReactNode;
};

const ListLayout: React.FC<Props> = ({ children }) => {
  return <ListWrapper>{children}</ListWrapper>;
};

export default ListLayout;
