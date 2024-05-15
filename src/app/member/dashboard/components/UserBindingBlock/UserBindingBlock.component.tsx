import React from 'react';
import { LayoutProps } from '../../../types';

const UserBindingBlock: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        gap: '0.5rem',
      }}
    >
      {children}
    </div>
  );
};

export default UserBindingBlock;
