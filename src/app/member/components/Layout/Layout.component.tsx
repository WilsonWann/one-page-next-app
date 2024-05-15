import React from 'react';
import { LayoutProps } from '../../types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
