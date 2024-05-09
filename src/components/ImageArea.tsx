import React from 'react';
// import wilson from '@/assets/wilson.jpg';
// import gubami from '@/assets/gubami.jpg';
// import lalaport from '@/assets/lalaport.jpg';
// import sansanyakiniku from '@/assets/sansanyakiniku.png';
import ImageBlock from './ImageBlock';
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
