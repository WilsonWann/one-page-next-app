import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Backdrop from '@/components/Backdrop/Backdrop.component';
import usePreventScroll from '@/app/hook/usePreventScroll';
import { ModalDiv } from './CartErrorModal.styles';

type Props = {
  errorMessage: string;
};

const CartErrorModal = (props: Props) => {
  const { errorMessage } = props;
  usePreventScroll({ active: !!errorMessage });
  return (
    <>
      <Backdrop
        active={!!errorMessage}
        backgroundColor={'transparent'}
        zIndex={99999 + 3 - 1}
      />
      <ModalDiv active={!!errorMessage}>
        <IoCloseCircleOutline color={'red'} size={32} />
        <div>{errorMessage}</div>
      </ModalDiv>
    </>
  );
};

export default CartErrorModal;
