import React from 'react'
import { Block, BlockTitle, BlockContent } from './FormBlock'
import { useAtom } from 'jotai'
import { emailAtom } from '@/atoms'

type Props = {}

const EmailBlock = (props: Props) => {
  const [email, setEmail] = useAtom(emailAtom)
  return (
    <Block>
      <BlockTitle htmlFor={'email'}>
        電子發票寄送信箱(無開立紙本發票)<span>建議填寫Yahoo以外的信箱</span>
      </BlockTitle>
      <BlockContent>
        <input id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </BlockContent>
    </Block>
  )
}

export default EmailBlock
