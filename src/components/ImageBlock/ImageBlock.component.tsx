import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageDiv, type ImageDivProps } from './ImageBlock.styles';

type RestrictTypeProps = {
  src: string;
  alt: string;
} & (
  | NoneRestrictImageProps
  | WidthRestrictImageProps
  | HeightRestrictImageProps
  | SquareRestrictImageProps
);

type NoneRestrictImageProps = {
  restrict?: 'none';
};

type WidthRestrictImageProps = {
  restrict: 'width';
  setWidth: number | string;
};

type HeightRestrictImageProps = {
  restrict: 'height';
  setHeight: number | string;
};

type SquareRestrictImageProps = {
  restrict: 'square';
  setSize: number | string;
};

const ImageBlock: React.FC<RestrictTypeProps> = (props) => {
  const { restrict = 'none', src, alt, ...imageProps } = props;

  const [blurDataURLSet, setBlurDataURLSet] = useState<
    { blurDataURL: string; height: number; width: number } | undefined
  >(undefined);

  // console.log('🚀 ~ blurDataURLSet:', blurDataURLSet);
  useEffect(() => {
    const getBlurredImage = async () => {
      const response = await fetch(`/api/getBase64?imageUrl=${src}`);
      const { base64, height, width } = await response.json();

      setBlurDataURLSet({
        blurDataURL: base64,
        height,
        width,
      });
    };

    getBlurredImage();
  }, [src]);

  if (!blurDataURLSet) return null;

  let InnerImageStyle: React.CSSProperties = {
    width: '100%',
    objectFit: 'cover',
  };
  let ImageDivProps: ImageDivProps = {
    aspectRatio: `${blurDataURLSet.width} / ${blurDataURLSet.height}`,
  };

  if (restrict === 'width' && 'setWidth' in imageProps) {
    if (typeof imageProps.setWidth === 'number') {
      ImageDivProps = {
        ...ImageDivProps,
        width: `${imageProps.setWidth * 4}px`,
      };
    }
    if (typeof imageProps.setWidth === 'string') {
      ImageDivProps = {
        ...ImageDivProps,
        width: `${imageProps.setWidth}`,
      };
    }
  }
  if (restrict === 'height' && 'setHeight' in imageProps) {
    if (typeof imageProps.setHeight === 'number') {
      ImageDivProps = {
        ...ImageDivProps,
        height: `${imageProps.setHeight * 4}px`,
      };
    }
    if (typeof imageProps.setHeight === 'string') {
      ImageDivProps = {
        ...ImageDivProps,
        height: `${imageProps.setHeight}`,
      };
    }
  }
  if (restrict === 'square' && 'setSize' in imageProps) {
    if (typeof imageProps.setSize === 'number') {
      ImageDivProps = {
        aspectRatio: `1 / 1`,
        width: `${imageProps.setSize * 4}px`,
        height: `${imageProps.setSize * 4}px`,
      };
    }
    if (typeof imageProps.setSize === 'string') {
      ImageDivProps = {
        aspectRatio: `1 / 1`,
        width: `${imageProps.setSize}`,
        height: `${imageProps.setSize}`,
      };
    }
    InnerImageStyle = {
      ...InnerImageStyle,
      aspectRatio: '16 / 9',
      maxWidth: 'unset',
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    };
  }

  const imageChildren = (
    <Image
      src={src}
      height={blurDataURLSet.height}
      width={blurDataURLSet.width}
      blurDataURL={blurDataURLSet.blurDataURL}
      placeholder={'blur'}
      style={InnerImageStyle}
      alt={alt}
    />
  );

  const imageWrapper = (
    children: React.ReactNode,
    imageDivProps: ImageDivProps,
  ) => {
    return <ImageDiv {...imageDivProps}>{children}</ImageDiv>;
  };

  return imageWrapper(imageChildren, ImageDivProps);
};

export default ImageBlock;
