import React from 'react';
import Image, { ImageLoader, StaticImageData } from 'next/image';
import styled from '@emotion/styled';

type CustomWidthProps = {
  customType: 'width';
  customWidth: string;
};

type CustomHeightProps = {
  customType: 'height';
  customHeight: string;
};

type ImageDefaultProps = {
  customType: 'default';
};

type ImageStaticProps = {
  customType: 'static';
  width: number;
  height: number;
};

type ImageProps = {
  src: string;
  alt: string;
  blurDataURL?: string;
  height?: number;
  width?: number;
};

type ImageDivProps = {
  aspectRatio: string;
};

const ImageDiv = styled.div<ImageDivProps>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio ?? '16 / 9'};
`;

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
