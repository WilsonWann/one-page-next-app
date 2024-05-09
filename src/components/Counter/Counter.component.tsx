import React from 'react';
import {
  CounterPanel,
  CounterWrapper,
  DecrementButton,
  IncrementButton,
} from './Counter.styles';
import { dispatchAtom } from '@/atoms';
import { useAtom } from 'jotai';

type Props = {
  cartItemId?: number;
  count: number;
};

const Counter = (props: Props) => {
  const { cartItemId, count } = props;
  const [, counter] = useAtom(dispatchAtom);
  return (
    <>
      <CounterWrapper>
        <DecrementButton onClick={() => counter('DEC', cartItemId)}>
          -
        </DecrementButton>
        <CounterPanel>{count}</CounterPanel>
        <IncrementButton onClick={() => counter('INC', cartItemId)}>
          +
        </IncrementButton>
      </CounterWrapper>
    </>
  );
};

export default Counter;
