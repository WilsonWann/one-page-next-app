import React from 'react';
import { AuthFormWrapper, Divider } from './AuthFormContainer.styles';

type Props = {
  children: React.ReactNode;
  showDivider?: boolean;
};

const AuthFormContainer: React.FC<Props> = ({
  children,
  showDivider = true,
}) => {
  return (
    <AuthFormWrapper>
      {showDivider && (
        <Divider>
          <span>或</span>
        </Divider>
      )}
      {children}
    </AuthFormWrapper>
  );
};

export default AuthFormContainer;
