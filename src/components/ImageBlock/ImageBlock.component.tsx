import React from 'react';
import Image from 'next/image';
import { ImageDiv } from './ImageBlock.styles';

type ImageProps = {
  src: string;
  alt: string;
  blurDataURL?: string;
  height?: number;
  width?: number;
};

const ImageBlock = (props: ImageProps) => {
  const { alt = '' } = props;

  return (
    <ImageDiv aspectRatio={`${props.width} / ${props.height}`}>
      <Image
        src={props.src}
        blurDataURL={props.blurDataURL}
        alt={alt}
        width={props.width}
        height={props.height}
        placeholder={'blur'}
        style={{ width: '100%', objectFit: 'cover' }}
      />
    </ImageDiv>
  );
};

export default ImageBlock;
