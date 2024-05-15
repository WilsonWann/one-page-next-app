import React from 'react';
import { AuthFormWrapper } from './AuthFormContainer.styles';

type Props = {
  children: React.ReactNode;
};

const AuthFormContainer: React.FC<Props> = ({ children }) => {
  return (
    <AuthFormWrapper>
      <div>
        <span>或</span>
      </div>
      {children}
    </AuthFormWrapper>
  );
};

export default AuthFormContainer;
