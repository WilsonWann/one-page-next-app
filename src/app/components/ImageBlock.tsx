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

type ImageDefaultProps = {
  customType: 'default'
  width: number
  height: number
}

type ImageProps = ImageDefaultProps | CustomWidthProps | CustomHeightProps

const ImageDiv = styled.div<ImageProps>`
  position: relative;

  ${(props) =>
    props.customType === 'default' &&
    `
      width: 100vw;
      height: calc((${props.height / props.width}) * 100vw);
    `}

  ${(props) =>
    props.customType === 'height' &&
    `
      width: 100%;
      height: ${props.customHeight};
      overflow: hidden;
    `} 
    
     ${(props) =>
    props.customType === 'width' &&
    `
      width: ${props.customWidth};
      height: 100%;      
      overflow: hidden;
    `}
`

const ImageBlock = (props: Props) => {
  const { image, alt = '', customType } = props

  if (customType === 'default') {
    return (
      <ImageDiv customType={customType} width={image.width} height={image.height}>
        <Image src={image} alt={alt} blurDataURL={image.blurDataURL} fill />
      </ImageDiv>
    )
  }

  if (customType === 'height') {
    return (
      <ImageDiv customType={customType} customHeight={props.customHeight}>
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
      <ImageDiv customType={customType} customWidth={props.customWidth}>
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
