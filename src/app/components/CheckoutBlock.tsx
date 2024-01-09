import React from 'react'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import CartSubtotal from './CartSubtotal'
import {
  getLogisticsDetailAtom,
  getPaymentTypeAtom,
  logisticsTypeAtom,
  mainLogisticsAtom,
  paymentTypesAtom,
  setLogisticsTypeAtom
} from '@/atoms'

const CheckoutWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100vw;
  gap: 0.5rem;
  box-sizing: border-box;

  & > h2 {
    text-align: center;
    font-size: x-large;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }

  & > div {
    margin: 0 1rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
`

const RadioButton = styled.input`
  margin-right: 0.5rem;
`
const Label = styled.label`
  display: inline-block;
  vertical-align: middle;
  & > span {
    color: white;
    background-color: red;
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
    height: 0.8rem;
  }
`

type Props = {}

const CheckoutBlock = (props: Props) => {
  const [logisticsType] = useAtom(logisticsTypeAtom)
  const [, setLogisticsType] = useAtom(setLogisticsTypeAtom)
  const [paymentType, setPaymentType] = useAtom(paymentTypesAtom)
  const [payments] = useAtom(getPaymentTypeAtom)
  const [logisticsDetail] = useAtom(getLogisticsDetailAtom)
  const [mainLogistics] = useAtom(mainLogisticsAtom)
  console.log('🚀 ~ file: CheckoutBlock.tsx:62 ~ CheckoutBlock ~ mainLogistics:', mainLogistics)
  return (
    <CheckoutWrapper>
      <h2>結帳</h2>

      <div>
        {`會員登入`}
        {`facebook login`}
        {`line login`}
        {`email login`}
      </div>
      <div>
        <div>
          <p>
            【詐騙猖獗，小心詐騙】本店絕不會另外通知消費者交易失敗，或是付款錯誤，一些奇怪理由，要您去提款機做任何取消交易或轉帳的動作，請小心不要受騙。
          </p>
          <p>會員點數介紹:</p>
          <p>
            加入會員消費可獲得點數回饋,可於下筆訂單折抵使用,50元可獲得一點,每筆訂單折抵上限50點=50元,點數期限為一年,每年會員生日還會免費獲得50點,於每月1日發送點數,無加入會員,點數回饋視同放棄!!
          </p>
          <p>!!超商限重!!一張單最多8罐與1罐XO醬共9罐,10罐以上請選擇宅配運送,滿1500元宅配免運</p>
          <p>@請依序操作至發票設定功能,才是完整訂單完成喔!! 電話客服時間為下午三點（04）20202020</p>
        </div>
      </div>
      <div>
        <fieldset>
          <p>運送方式</p>
          {logisticsDetail.map((logisticsMethod, index) => (
            <div key={index}>
              <RadioButton
                id={`${logisticsMethod.logisticsType}-${logisticsMethod.payment}`}
                type='radio'
                value={logisticsMethod.logisticsType}
                name={'logisticsType'}
                onChange={() => setLogisticsType(logisticsMethod.logisticsType)}
                checked={logisticsType === logisticsMethod.logisticsType}
              />
              <Label htmlFor={`${logisticsMethod.logisticsType}-${logisticsMethod.payment}`}>
                {logisticsMethod.logisticsName}{' '}
                {logisticsMethod.freight && <span> +{logisticsMethod.freight}</span>}
              </Label>
              <br />
            </div>
          ))}
        </fieldset>
      </div>
      <div>
        <fieldset>
          <p>付款方式</p>
          {payments.map((paymentMethod, index) => (
            <div key={index}>
              <RadioButton
                id={`${paymentMethod.payment}-${paymentMethod.name}`}
                type='radio'
                value={paymentMethod.payment}
                name={'payment'}
                onChange={() => setPaymentType(paymentMethod.payment)}
                checked={paymentType === paymentMethod.payment}
              />
              <Label htmlFor={`${paymentMethod.payment}-${paymentMethod.name}`}>
                {paymentMethod.name}
              </Label>
              <br />
            </div>
          ))}
        </fieldset>
      </div>
      <CartSubtotal freight={mainLogistics.freight} />
    </CheckoutWrapper>
  )
}

export default CheckoutBlock
