import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FaFacebookMessenger } from 'react-icons/fa6';

const fb_blue = '#1877f2';
const fb_button_size = 48;

const FbContainer = styled.div`
  /* right: 24px;
  bottom: 24px; */
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FbButton = styled(Link)`
  height: ${fb_button_size}px;
  width: ${fb_button_size}px;
  border-radius: 50%;
  background-color: ${fb_blue};
  color: #ffffff;
  font-weight: bolder;
  border: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 6px; */
  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px; */
  /* user-select: none; */
  /* white-space: nowrap; */
`;

export default function FbMessengerButton() {
  return (
    <FbContainer>
      <FbButton
        href='http://m.me/musense.marketing'
        target='_blank'
        rel='noreferrer noopener'
      >
        <FaFacebookMessenger size={24} />
      </FbButton>
    </FbContainer>
  );
}
