import React from 'react'
import { Block } from './FormBlock'
import CityBlock from './CityBlock'
import DistrictBlock from './DistrictBlock'
import TimeToReceiveBlock from './TimeToReceiveBlock'
import StreetBlock from './StreetBlock'
import DefaultAddress from './DefaultAddress'

type Props = {
  addressError?: any
}

const HomeDeliveryBlocks = (props: Props) => {
  const { addressError } = props
  console.log('🚀 ~ HomeDeliveryBlocks ~ addressError:', addressError)
  return (
    <>
      <Block required direction={'row'} gap={'1rem'}>
        <CityBlock error={addressError?.city} />
        <DistrictBlock error={addressError?.district} />
      </Block>
      <StreetBlock required error={addressError?.street} />
      <TimeToReceiveBlock />
      <DefaultAddress />
    </>
  )
}

export default HomeDeliveryBlocks
