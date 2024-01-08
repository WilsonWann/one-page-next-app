import React from 'react'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import { getCartDiscountAtom, getCartListSubtotalAtom } from '@/atoms'
import Badge from './Badge'

const CartDiscountWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;
  padding: 1rem;
  border-bottom: 1px solid rgba(87, 90, 93, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  & b {
    font-size: large;
    font-weight: bold;
  }
`

type Props = {}

const CartDiscount = (props: Props) => {
  const [subtotal] = useAtom(getCartListSubtotalAtom)
  const [cartDiscount] = useAtom(getCartDiscountAtom)
  const active = subtotal >= cartDiscount

  if (active) {
    return (
      <CartDiscountWrapper>
        <div>已使用優惠</div>
        <Badge label='滿額免運' color='#575a5d' backgroundColor={'rgba(29,187,153,.2)'} />
        <div>
          🎆～滿{cartDiscount}元超商免運費!!超商限重最多9罐!!~(10罐以上請選擇宅配運送) 滿
          {cartDiscount}元超商免運
        </div>
      </CartDiscountWrapper>
    )
  }

  return (
    <CartDiscountWrapper>
      <div>
        <b>未</b>使用優惠
      </div>
      <Badge label='滿額免運' />
      <div>
        🎆～滿{cartDiscount}元超商免運費!!超商限重最多9罐!!~(10罐以上請選擇宅配運送) 再買{' '}
        {cartDiscount - subtotal}
        即可享有 免運優惠
      </div>
    </CartDiscountWrapper>
  )
}

export default CartDiscount
