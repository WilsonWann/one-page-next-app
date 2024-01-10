import React from 'react'
import { Block, BlockTitle, BlockContent, BlockCol } from './FormBlock'
import CityBlock from './CityBlock'
import DistrictBlock from './DistrictBlock'
import TimeToReceiveBlock from './TimeToReceiveBlock'
import { useAtom } from 'jotai'
import { streetAtom } from '@/atoms'
import StreetBlock from './StreetBlock'

const HomeDeliveryBlocks = () => {
  return (
    <>
      <Block direction={'row'} gap={'1rem'}>
        <BlockCol>
          <CityBlock />
        </BlockCol>
        <BlockCol>
          <DistrictBlock />
        </BlockCol>
      </Block>
      <Block>
        <StreetBlock />
      </Block>
      <Block gap={'1rem'}>
        <TimeToReceiveBlock />
      </Block>
      <Block>
        <BlockContent>
          <input type='checkbox' id='defaultAddress' />
        </BlockContent>
        <BlockTitle htmlFor={'defaultAddress'}>儲存為常用地址</BlockTitle>
      </Block>
    </>
  )
}

export default HomeDeliveryBlocks
