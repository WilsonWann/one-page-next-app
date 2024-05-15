import React from 'react';
import { AuthPageWrapper } from './AuthPageContainer.styles';

type Props = {
  children: React.ReactNode;
};

const AuthPageContainer: React.FC<Props> = ({ children }) => {
  return <AuthPageWrapper>{children}</AuthPageWrapper>;
};

export default AuthPageContainer;
