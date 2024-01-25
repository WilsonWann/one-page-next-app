'use client';

import ShoppingArea from './components/ShoppingArea';
import MarketingBlock from './components/MarketingBlock';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { productModalOpenAtom, shoppingListAtom } from '@/atoms';
import { ShoppingItem } from '@/types';
import ProductModal from './components/ProductModal';
import CartArea from './components/CartArea';
import Promotion from './components/Promotion';
import { signIn, signOut, useSession } from 'next-auth/react';
import ImageArea from './components/ImageArea';
import VideoArea from './components/VideoArea';

export default function Home() {
  const [shoppingList, setShoppingList] = useAtom(shoppingListAtom);
  console.log('🚀 ~ Home ~ shoppingList:', shoppingList);

  const [modalOpen] = useAtom(productModalOpenAtom);

  const { data: sessionData } = useSession();
  console.log('🚀 ~ Home ~ sessionData:', sessionData);
  useEffect(() => {
    function getData() {
      fetch('/api/getServerData')
        .then((res) => res.json())
        .then((data: ShoppingItem[]) => setShoppingList(data));
    }

    getData();
  }, [setShoppingList]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      {/* react-lite-youtube video */}
      <Promotion
        title={
          '🎄聖誕佳節滿800元超商免運費！滿1500元宅配免運,加入會員好處多~紅利點數可折抵現金喔!!'
        }
      />
      <VideoArea />
      {/* images */}
      <ImageArea />
      {/* marketing paragraph */}
      <MarketingBlock
        title={'優惠折扣'}
        label={'優惠折扣'}
        content={
          ' ～ 🎄聖誕佳節滿800元超商免運費！滿1500元宅配免運,加入會員好處多~紅利點數可折抵現金喔!!'
        }
      />
      {/* @ts-expect-error */}
      <ShoppingArea />
      {/* <ShoppingArea data={shoppingList} /> */}
      <ProductModal active={modalOpen} />

      <CartArea />

      <div></div>
      {/* member login */}
      {/* next auth */}

      {/* any question: fb chat button*/}
      <div></div>
    </main>
  );
}
