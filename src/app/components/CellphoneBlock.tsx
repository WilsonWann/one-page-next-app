import React from 'react'
import { Block, BlockTitle, BlockContent } from './FormBlock'
import { useAtom } from 'jotai'
import { cellphoneAtom } from '@/atoms'

type Props = {}

const CellphoneBlock = (props: Props) => {
  const [cellphone, setCellphone] = useAtom(cellphoneAtom)
  return (
    <Block>
      <BlockTitle htmlFor={'cellphone'}>手機號碼</BlockTitle>
      <BlockContent>
        <input
          id='cellphone'
          type='text'
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
        />
      </BlockContent>
    </Block>
  )
}

export default CellphoneBlock
