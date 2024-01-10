import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useAtom } from 'jotai'
import CartSubtotal from './CartSubtotal'
import { Block } from './FormBlock'
import { mainLogisticsAtom, recipientAtom, getGoodsDeliverAtom } from '@/atoms'
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
import { recipientSchema } from '@/zodSchema'
import { z, ZodFormattedError } from 'zod'

const CheckoutForm = styled.form`
  position: relative;
  width: 100vw;
  padding: 0 1rem;
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
  const [goodsDeliver] = useAtom(getGoodsDeliverAtom)
  const [startParsing, setStartParsing] = useState(false)
  const [error, setError] = useState<
    ZodFormattedError<z.infer<typeof recipientSchema>> | undefined
  >(undefined)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStartParsing(true)
    // console.log('🚀 ~ CheckoutBlock ~ mainLogistics:', mainLogistics)
    console.log('🚀 ~ CheckoutBlock ~ goodsDeliver:', goodsDeliver)
  }

  useEffect(() => {
    if (startParsing) {
      const recipientValid = recipientSchema.safeParse(recipient)
      console.log('🚀 ~ CheckoutBlock ~ recipientValid:', recipientValid)
      if (!recipientValid.success) {
        const error = recipientValid.error.format()
        setError(error)
        return
      }
      setError(undefined)
    }
  }, [recipient, startParsing])

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <CheckoutTitle>結帳</CheckoutTitle>
      <CheckoutLoginBlock />
      <ScamReminderBlock />
      <LogisticsBlock />
      <PaymentBlock />

      <Block>
        <CartSubtotal padding={'0'} title='總計' freight={mainLogistics.freight} />
      </Block>
      <NameBlock required error={error?.name} />
      <CellphoneBlock required error={error?.cellphone} />
      {mainLogistics.logisticsMode === 'homeDelivery' ? (
        <HomeDeliveryBlocks addressError={error?.address} />
      ) : (
        <InStorePickupBlocks />
      )}
      <GenderBlock />
      <EmailBlock required error={error?.email} />
      <NoteBlock />

      <button type='submit'>送出</button>
    </CheckoutForm>
  )
}

export default CheckoutBlock
