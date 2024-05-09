import React from 'react';
import ImageBlock from '@/components/ImageBlock/ImageBlock.component';
import { ShoppingItem } from '@/types';

type Props = {
  data: ShoppingItem[];
};

const ImageArea = (props: Props) => {
  const { data: shoppingItemList } = props;
  console.log('🚀 ~ ImageArea ~ shoppingItemList:', shoppingItemList);

  return (
    <>
      {shoppingItemList.map(({ image }, index) => {
        if (!image) return null;

        const { src, height, width, blurredDataUrl, alt } = image;
        return (
          <ImageBlock
            key={index}
            src={src}
            alt={alt}
            width={width}
            height={height}
            blurDataURL={blurredDataUrl}
          />
        );
      })}
    </>
  );
};

export default ImageArea;
