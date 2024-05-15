import React from 'react';
import { LayoutProps } from '../../types';

const LayoutBlock: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        gap: '1rem',
        width: '100%',
        padding: '1rem',
      }}
    >
      {children}
    </div>
  );
};

export default LayoutBlock;
