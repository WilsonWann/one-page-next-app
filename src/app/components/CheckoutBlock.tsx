import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import CartSubtotal from './CartSubtotal'
import { Block } from './FormBlock'
import { mainLogisticsAtom, recipientAtom } from '@/atoms'
import HomeDeliveryBlocks from './HomeDeliveryBlocks'
import InStorePickupBlocks from './InStorePickupBlocks'
import GenderBlock from './GenderBlock'
import LogisticsBlock from './LogisticsBlock'
import PaymentBlock from './PaymentBlock'
import NameBlock from './NameBlock'
import CellphoneBlock from './CellphoneBlock'
import EmailBlock from './EmailBlock'
import NoteBlock from './NoteBlock'
import ScamReminderBlock from './ScamReminderBlock'
import CheckoutLoginBlock from './CheckoutLoginBlock'

const CheckoutWrapper = styled.div`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 0.5rem;
`
const CheckoutTitle = styled.h2`
  text-align: center;
  font-size: x-large;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`
type Props = {}

const CheckoutBlock = (props: Props) => {
  const [mainLogistics] = useAtom(mainLogisticsAtom)
  const [recipient] = useAtom(recipientAtom)
  console.log('🚀 ~ CheckoutBlock ~ recipient:', recipient)

  return (
    <CheckoutWrapper>
      <CheckoutTitle>結帳</CheckoutTitle>

      <CheckoutLoginBlock />
      <ScamReminderBlock />
      <LogisticsBlock />
      <PaymentBlock />

      <Block>
        <CartSubtotal padding={'0'} title='總計' freight={mainLogistics.freight} />
      </Block>
      <NameBlock />
      <CellphoneBlock />
      {mainLogistics.logisticsMode === 'homeDelivery' ? (
        <HomeDeliveryBlocks />
      ) : (
        <InStorePickupBlocks />
      )}
      <GenderBlock />
      <EmailBlock />
      <NoteBlock />

      {/* <div onClick={}>送出</div> */}
    </CheckoutWrapper>
  )
}

export default CheckoutBlock
