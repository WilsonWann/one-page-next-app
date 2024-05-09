import React from 'react';
import { Wrapper } from './AddToCartSuccessTip.styles';

type Props = {
  active: boolean;
};

const AddToCartSuccessTip = (props: Props) => {
  const { active } = props;
  return <Wrapper active={active}>已加到購物車</Wrapper>;
};

export default AddToCartSuccessTip;
