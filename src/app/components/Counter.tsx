import React from 'react'
import styled from '@emotion/styled'
import { quantityAtom, dispatchAtom } from '@/atoms'
import { useAtom } from 'jotai'

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  & > *:first-of-type {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
  }
  & > * {
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    align-items: inherit;
    height: 2rem;
    /* line-height: 2rem; */
    padding: 0;
    margin: 0;
    box-sizing: content-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-left: none;
  }

  & button {
    width: 2rem;
  }
  & input {
    width: 3rem;
    text-align: center;
    /* flex: 2 1 0; */
  }
`

type Props = {
  id?: number
  count?: number
}

const Counter = (props: Props) => {
  const [atom] = useAtom(quantityAtom)
  const { id = -1, count = atom } = props
  const [, counter] = useAtom(dispatchAtom)

  return (
    <CounterWrapper>
      <button type='button' onClick={() => counter({ type: 'DEC', id })}>
        -
      </button>
      <input type='number' readOnly={true} value={count} />
      <button type='button' onClick={() => counter({ type: 'INC', id })}>
        +
      </button>
    </CounterWrapper>
  )
}

export default Counter
