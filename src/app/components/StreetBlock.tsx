import React from 'react'
import { BlockTitle, BlockContent } from './FormBlock'
import { useAtom } from 'jotai'
import { streetAtom } from '@/atoms'

type Props = {}

const StreetBlock = (props: Props) => {
  const [street, setStreet] = useAtom(streetAtom)
  return (
    <>
      <BlockTitle htmlFor={'street'}>街道地址</BlockTitle>
      <BlockContent>
        <input id='street' type='text' value={street} onChange={(e) => setStreet(e.target.value)} />
      </BlockContent>
    </>
  )
}

export default StreetBlock
