import React from 'react'
import { Block } from './FormBlock'

type Props = {}

const CheckoutLoginBlock = (props: Props) => {
  return (
    <Block>
      {`會員登入`}
      {`facebook login`}
      {`line login`}
      {`email login`}
    </Block>
  )
}

export default CheckoutLoginBlock
