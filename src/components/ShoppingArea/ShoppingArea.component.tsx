import React from 'react';
import { DisplayControlPanel, DisplayArea } from './ShoppingArea.styles';
import { IoSquareSharp } from 'react-icons/io5';
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { useAtom } from 'jotai';
import { shoppingAreaDisplayColumnAtom } from '@/atoms';
import HorizontalLine from '@/components/HorizontalLine/HorizontalLine.component';
import DisplayTitle from '@/components/DisplayTitle/DisplayTitle.component';
import CardItem from '@/components/CardItem/CardItem.component';
import { ShoppingItem } from '@/types';

type Props = {
  data: ShoppingItem[];
};

const ShoppingArea = (props: Props) => {
  const { data: shoppingItemList } = props;
  const [columnNumber, setColumn] = useAtom(shoppingAreaDisplayColumnAtom);
  return (
    <>
      <DisplayTitle title={'精選單品'} />
      <DisplayControlPanel>
        <IoSquareSharp size={12} color={'#999'} onClick={() => setColumn(1)} />
        <TfiLayoutGrid2Alt
          size={12}
          color={'#999'}
          onClick={() => setColumn(2)}
        />
        <TfiLayoutGrid3Alt
          size={12}
          color={'#999'}
          onClick={() => setColumn(3)}
        />
        {/* <TfiLayoutGrid4Alt size={12} color={'#999'} onClick={() => setColumn(4)} /> */}
      </DisplayControlPanel>
      <DisplayArea gap={'1rem'} columnItems={columnNumber}>
        {shoppingItemList.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </DisplayArea>
      <HorizontalLine />
    </>
  );
};

export default ShoppingArea;
