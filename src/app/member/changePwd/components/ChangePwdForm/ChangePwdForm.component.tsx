import React from 'react';
import { ChangePwdFormWrapper } from './ChangePwdForm.styles';

type Props = {
  children: React.ReactNode;
};

const ChangePwdForm: React.FC<Props> = ({ children }) => {
  return <ChangePwdFormWrapper>{children}</ChangePwdFormWrapper>;
};

export default ChangePwdForm;
