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

        return <ImageBlock key={index} {...image} />;
      })}
    </>
  );
};

export default ImageArea;
