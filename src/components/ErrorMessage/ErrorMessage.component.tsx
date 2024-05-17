import React from 'react';
import { Message } from './ErrorMessage.styles';
import { FieldError } from 'react-hook-form';
import { ErrorProps } from '@/types';

type Props = {
  error?: FieldError | ErrorProps | string;
};

function checkFieldError(error: FieldError | ErrorProps): error is FieldError {
  if ((error as FieldError).message !== undefined) {
    return true;
  }
  return false;
}
function checkErrorProps(error: FieldError | ErrorProps): error is ErrorProps {
  if ((error as ErrorProps).errorMessage !== undefined) {
    return true;
  }
  return false;
}

const ErrorMessage = (props: Props) => {
  const { error: error } = props;
  if (!error) return null;

  if (typeof error === 'string') {
    return <Message>{error}</Message>;
  }

  if (checkFieldError(error)) {
    if (error.message === 'required') return null;

    return <Message>{error.message}</Message>;
  }

  if (checkErrorProps(error)) {
    return <Message>{error.errorMessage}</Message>;
  }
};

export default ErrorMessage;
