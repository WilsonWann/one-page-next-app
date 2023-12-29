import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styled from '@emotion/styled'

type Props = {
  image: StaticImageData
  alt?: string
} & (DefaultProps | CustomWidthProps | CustomHeightProps)

type DefaultProps = {
  customType: 'default'
}
type CustomWidthProps = {
  customType: 'width'
  customWidth: string
}

type CustomHeightProps = {
  customType: 'height'
  customHeight: string
}
type ImageProps = {
  width: number
  height: number
  customWidth?: string
  customHeight?: string
}

const ImageDiv = styled.div<ImageProps>`
  position: relative;
  ${(props) =>
    !props.customWidth &&
    !props.customHeight &&
    `
      width: 100vw;
      height: calc((${props.height / props.width}) * 100vw);
    `}

  ${(props) =>
    props.customHeight &&
    `
      // width: calc((${props.width / props.height}) * ${props.customHeight});
      width: 100%;
      height: ${props.customHeight};
      overflow: hidden;
    `} 
    
     ${(props) =>
    props.customWidth &&
    `
      width: ${props.customWidth};
      height: 100%;
      // height: calc((${props.height / props.width}) * ${props.customWidth});      
      overflow: hidden;
    `}
`

const ImageBlock = (props: Props) => {
  const { image, alt = '', customType } = props

  if (customType === 'default') {
    return (
      <ImageDiv width={image.width} height={image.height}>
        <Image src={image} alt={alt} blurDataURL={image.blurDataURL} fill />
      </ImageDiv>
    )
  }

  if (customType === 'height') {
    return (
      <ImageDiv width={image.width} height={image.height} customHeight={props.customHeight}>
        <Image
          src={image}
          alt={alt}
          blurDataURL={image.blurDataURL}
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </ImageDiv>
    )
  }

  if (customType === 'width') {
    return (
      <ImageDiv width={image.width} height={image.height} customWidth={props.customWidth}>
        <Image
          src={image}
          alt={alt}
          blurDataURL={image.blurDataURL}
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </ImageDiv>
    )
  }
}

export default ImageBlock
