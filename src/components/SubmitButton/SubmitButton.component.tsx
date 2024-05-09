'use client';
import React from 'react';
import { Button } from './SubmitButton.styles';
import { useFormStatus } from 'react-dom';

type Props = {
  text: string;
};
const SubmitButton = (props: Props) => {
  const { text } = props;
  const { pending } = useFormStatus();
  return (
    <Button type='submit' aria-disabled={pending}>
      {text}
    </Button>
  );
};

export default SubmitButton;
