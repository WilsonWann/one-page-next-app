import React from 'react';
import Badge from '@/components/Badge/Badge.component';
import { useAtom } from 'jotai';
import { getInStorePickupCouponAtom, getCartListSubtotalAtom } from '@/atoms';
import { CartDiscountWrapper } from './CartDiscount.styles';

const CartDiscount = () => {
  const [subtotal] = useAtom(getCartListSubtotalAtom);
  const [inStorePickupCoupon] = useAtom(getInStorePickupCouponAtom);

  if (inStorePickupCoupon.active) {
    return (
      <CartDiscountWrapper>
        <div>已使用優惠</div>
        <Badge
          label='滿額免運'
          color='#575a5d'
          backgroundColor={'rgba(29,187,153,.2)'}
        />
        <div>
          🎆～滿{inStorePickupCoupon.threshold}
          元超商免運費!!超商限重最多9罐!!~(10罐以上請選擇宅配運送) 滿
          {inStorePickupCoupon.threshold}
          元超商免運
        </div>
      </CartDiscountWrapper>
    );
  }

  return (
    <CartDiscountWrapper>
      <div>
        <b>未</b>使用優惠
      </div>
      <Badge label='滿額免運' />
      <div>
        🎆～滿<b>{inStorePickupCoupon.threshold}</b>
        元超商免運費!!超商限重最多9罐!!~(10罐以上請選擇宅配運送) 再買
        <b>{inStorePickupCoupon.threshold - subtotal}</b>
        即可享有 免運優惠
      </div>
    </CartDiscountWrapper>
  );
};

export default CartDiscount;
