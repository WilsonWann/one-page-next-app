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

  imageEl?: React.ReactNode;
};

const Item: React.FC<Props> = (props) => {
  const [columnNumber] = useAtom(shoppingAreaDisplayColumnAtom);
  const [, setItemId] = useAtom(setTakeOnHandItemIdAtom);

  const calcHeight = (columnNumber: number) => {
    if (columnNumber === 0) return '0';
    return `calc((100vw - 1rem * 2 - 1rem  * ${
      columnNumber - 1
    }) / ${columnNumber})`;
  };
  const imageWrapperHeight = calcHeight(columnNumber);

  const {
    item,
    align = 'center',
    children = null,
    subtotal = null,
    addToCartButton = <AddToCartButton onClick={() => setItemId(item.id)} />,
  } = props;

  if (!item.image) return null;

  const { image } = item;

  const {
    imageEl = (
      <CardImageBlock
        {...image}
        restrict={'square'}
        setSize={imageWrapperHeight}
      />
    ),
  } = props;

  // const style: React.CSSProperties = {
  //   display: 'flex',
  //   alignItems: 'stretch',
  //   justifyContent: 'center',
  //   height: imageWrapperHeight,
  //   width: '100%',
  //   overflow: 'clip',
  // };

  return (
    <ItemWrapper align={align}>
      {/* <div style={style}> */}
      {imageEl}
      {/* </div> */}
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
