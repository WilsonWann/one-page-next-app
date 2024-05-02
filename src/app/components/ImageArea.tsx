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
  //* get arr from API
  // const arr = [
  //   { name: wilson, alt: 'Wilson' },
  //   { name: gubami, alt: '牛肉麵' },
  //   { name: lalaport, alt: '拉拉寶都' },
  //   { name: sansanyakiniku, alt: '三三燒肉' },
  // ];
  return (
    <>
      {shoppingItemList.map(({ image }, index) => (
        <ImageBlock
          key={index}
          image={image}
          customType={'width'}
          customWidth={'100vw'}
          // width={item.name.width}
        />
      ))}
    </>
  );
};

export default ImageArea;
