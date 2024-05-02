import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa6';

type Props = {
  size?: number;
};
export default function FbMessengerButton(props: Props) {
  return <FaFacebookMessenger size={props.size ?? 24} />;
}
