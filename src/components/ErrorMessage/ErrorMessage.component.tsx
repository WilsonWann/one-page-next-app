import React from 'react';
import { Message } from './ErrorMessage.styles';

type Props = {
  children: React.ReactNode;
};

const ErrorMessage = (props: Props) => {
  const { children } = props;
  return <Message>{children}</Message>;
};

export default ErrorMessage;
