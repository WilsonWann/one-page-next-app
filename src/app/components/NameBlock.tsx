import React from 'react'
import { Block, BlockTitle, BlockContent } from './FormBlock'
import { useAtom } from 'jotai'
import { nameAtom } from '@/atoms'

type Props = {}

const NameBlock = (props: Props) => {
  const [name, setName] = useAtom(nameAtom)
  return (
    <Block>
      <BlockTitle htmlFor={'recipient'}>
        收件人<span>請填寫姓名</span>
      </BlockTitle>
      <BlockContent>
        <input id='recipient' type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </BlockContent>
    </Block>
  )
}

export default NameBlock
