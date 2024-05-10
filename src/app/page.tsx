'use client';

import ShoppingArea from '@/components/ShoppingArea/ShoppingArea.component';
import MarketingBlock from '@/components/MarketingBlock/MarketingBlock.component';
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { productModalOpenAtom, shoppingListAtom } from '@/atoms';
import { ShoppingItem } from '@/types';
import ProductModal from '@/components/ProductModal/ProductModal.component';
import CartArea from '@/components/CartArea/CartArea.component';
import Promotion from '@/components/Promotion/Promotion.component';
import { signIn, signOut, useSession } from 'next-auth/react';
import ImageArea from '@/components/ImageArea/ImageArea.component';
import VideoArea from '@/components/VideoArea/VideoArea.component';
import { createPortal } from 'react-dom';

export default function Home() {
  const [shoppingList, setShoppingList] = useAtom(shoppingListAtom);
  console.log('🚀 ~ Home ~ shoppingList:', shoppingList);

  const [modalOpen] = useAtom(productModalOpenAtom);

  const { data: sessionData } = useSession();
  // console.log('🚀 ~ Home ~ sessionData:', sessionData);
  useEffect(() => {
    function getData() {
      fetch('/api/getServerData')
        .then((res) => res.json())
        .then((data: ShoppingItem[]) => setShoppingList(data));
    }

    getData();
  }, [setShoppingList]);

  const productModalWrapper = React.useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    productModalWrapper.current = document.querySelector('#product-modal');
  }, [productModalWrapper]);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <Promotion
        title={
          '🎄聖誕佳節滿800元超商免運費！滿1500元宅配免運,加入會員好處多~紅利點數可折抵現金喔!!'
        }
      />

      <VideoArea />

      <ImageArea data={shoppingList} />

      <MarketingBlock
        title={'優惠折扣'}
        label={'優惠折扣'}
        content={
          ' ～ 🎄聖誕佳節滿800元超商免運費！滿1500元宅配免運,加入會員好處多~紅利點數可折抵現金喔!!'
        }
      />
      <ShoppingArea data={shoppingList} />

      {productModalWrapper.current &&
        createPortal(
          <ProductModal active={modalOpen} />,
          productModalWrapper.current,
        )}
      <CartArea />
    </main>
  );
}
