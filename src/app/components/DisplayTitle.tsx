import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h2`
  margin-top: 2rem;
  font-size: x-large;
`

type Props = {
  title: string
}

const DisplayTitle = ({ title }: Props) => {
  return <Title>{title}</Title>
}

export default DisplayTitle
