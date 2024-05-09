import React from 'react';
import {
  Modal,
  ModalState,
  ModalTitle,
  CloseButtonWrapper,
} from './Promotion.styles';
import CloseButton from '@/components/CloseButton/CloseButton.component';

type Props = {
  title: string;
};
const Promotion = (props: Props) => {
  const { title } = props;

  return (
    <>
      <ModalState type='checkbox' id='modal' defaultChecked={true} />
      <Modal id='promotion-modal'>
        <ModalTitle>{title}</ModalTitle>
        <CloseButtonWrapper>
          <CloseButton htmlFor={'modal'} />
        </CloseButtonWrapper>
      </Modal>
    </>
  );
};

export default Promotion;
