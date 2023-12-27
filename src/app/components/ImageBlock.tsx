import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styled from '@emotion/styled'

type Props = {
  image: StaticImageData
  alt?: string
}

type ImageProps = {
  width: number
  height: number
}
const ImageDiv = styled.div<ImageProps>`
  position: relative;
  width: 100vw;
  height: calc((${(props) => props.height} / ${(props) => props.width}) * 100vw);
`

const ImageBlock = (props: Props) => {
  const { image, alt = '' } = props

  return (
    <ImageDiv width={image.width} height={image.height}>
      <Image src={image} alt={alt} blurDataURL={image.blurDataURL} fill />
    </ImageDiv>
  )
}

export default ImageBlock
