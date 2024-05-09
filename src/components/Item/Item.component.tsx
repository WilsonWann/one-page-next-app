import React from 'react';
import {
  ItemWrapper,
  CardImageBlock,
  ItemContentWrapper,
  ItemTitle,
  PriceWrapper,
  Price,
  SpecialPrice,
  Content,
  ItemFooter,
} from './Item.styles';

import { ShoppingItem } from '@/types';
import { useAtom } from 'jotai';
import {
  shoppingAreaDisplayColumnAtom,
  setTakeOnHandItemIdAtom,
} from '@/atoms';
import AddToCartButton from '@/components/AddToCartButton/AddToCartButton.component';
import numberFormat from '@/helper/numberFormat';

type Props = {
  item: ShoppingItem;
  align?: string;
  padding?: string;
  children?: React.ReactNode;
  subtotal?: React.ReactNode;
  addToCartButton?: React.ReactNode;
};

const Item = (props: Props) => {
  const [columnNumber] = useAtom(shoppingAreaDisplayColumnAtom);
  const [, setItemId] = useAtom(setTakeOnHandItemIdAtom);
  const {
    item,
    align = 'center',
    children = null,
    subtotal = null,
    addToCartButton = <AddToCartButton onClick={() => setItemId(item.id)} />,
  } = props;

  return (
    <ItemWrapper align={align}>
      {/* <CardImageBlock
        image={item.image}
        customType={'width'}
        alt={item.alt}
        customWidth='100%'
      /> */}
      <ItemContentWrapper padding={props.padding}>
        <ItemTitle>
          {item.title}
          <small>{item.subtitle}</small>
        </ItemTitle>
        <PriceWrapper>
          <Price>原價：{numberFormat(item.price)}</Price>
          <SpecialPrice>
            現在特價只要{numberFormat(item.specialPrice)}元
          </SpecialPrice>
        </PriceWrapper>
        {children}
        <Content>{item.content}</Content>
      </ItemContentWrapper>
      <ItemFooter>
        {subtotal}
        {addToCartButton}
      </ItemFooter>
    </ItemWrapper>
  );
};

export default Item;
