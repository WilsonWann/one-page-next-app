import React from 'react';
import wilson from '@/assets/wilson.jpg';
import gubami from '@/assets/gubami.jpg';
import lalaport from '@/assets/lalaport.jpg';
import sansanyakiniku from '@/assets/sansanyakiniku.png';
import ImageBlock from './ImageBlock';

type Props = {};

const ImageArea = (props: Props) => {
  //* get arr from API
  const arr = [
    { name: wilson, alt: 'Wilson' },
    { name: gubami, alt: '牛肉麵' },
    { name: lalaport, alt: '拉拉寶都' },
    { name: sansanyakiniku, alt: '三三燒肉' }
  ];
  return (
    <>
      {arr.map((item, index) => (
        <ImageBlock key={index} customType={'static'} image={item.name} alt={item.alt} />
      ))}
    </>
  );
};

export default ImageArea;
