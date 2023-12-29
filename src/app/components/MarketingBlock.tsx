import React from 'react'
import styled from '@emotion/styled'
import DisplayTitle from './DisplayTitle'
import HorizontalLine from './HorizontalLine'
import Badge from './Badge'

const MarketingContent = styled.h3`
  padding: 0 1rem;
  margin: 1rem auto 2rem;
`

type Props = {
  title: string
  label: string
  content: string
}

const MarketingBlock = (props: Props) => {
  const { title, label, content } = props
  return (
    <>
      <DisplayTitle title={title} />
      <MarketingContent>
        <Badge label={label} /> {content}{' '}
      </MarketingContent>

      <HorizontalLine />
    </>
  )
}

export default MarketingBlock
