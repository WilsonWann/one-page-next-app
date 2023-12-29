import React from 'react'
import styled from '@emotion/styled'
import AddToCartButton from './AddToCartButton'

import wilson from '../../assets/wilson.jpg'
import gubami from '../../assets/gubami.jpg'
import lalaport from '../../assets/lalaport.jpg'
import sansanyakiniku from '../../assets/sansanyakiniku.png'
import pokemon from '../../assets/pokemon.jpg'
import mcdonald from '../../assets/mcdonald.png'
import scheduled from '../../assets/scheduled.jpg'
import ImageBlock from './ImageBlock'

import { IoSquareSharp } from 'react-icons/io5'
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt, TfiLayoutGrid4Alt } from 'react-icons/tfi'
import { useAtom } from 'jotai'
import { shoppingAreaDisplayColumnAtom } from '@/atoms/routingAtoms'
import HorizontalLine from './HorizontalLine'

const arr = [
  {
    image: wilson,
    alt: 'Wilson'
  },
  {
    image: gubami,
    alt: '牛肉麵'
  },
  {
    image: lalaport,
    alt: '拉拉寶都'
  },
  {
    image: sansanyakiniku,
    alt: '三三燒肉'
  },
  {
    image: scheduled,
    alt: '時刻表'
  },
  {
    image: pokemon,
    alt: '皮卡丘'
  },
  {
    image: mcdonald,
    alt: '麥當勞'
  }
]

const DisplayTitle = styled.h2`
  margin-top: 2rem;
  font-size: x-large;
`

const DisplayControlPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin: 1rem auto 2rem;
`

type DisplayAreaProps = {
  gap?: string
  columnItems: number
}

const DisplayArea = styled.div<DisplayAreaProps>`
  position: relative;
  height: fit-content;
  width: 100vw;
  padding: ${(props) => (props.gap ? `0 ${props.gap}` : '0')};

  display: grid;
  grid-template-columns: repeat(${(props) => props.columnItems}, 1fr);
  grid-template-rows: 1fr;

  gap: ${(props) => props.gap ?? '0'};
  margin-bottom: 2rem;
`

type ItemProps = {
  order: number
}

const Item = styled.div<ItemProps>`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => (props.order % 2 == 0 ? 'lightgray' : 'darkgray')};
`

const CardImageBlock = styled(ImageBlock)`
  /* width: 100% !important;
  height: 10rem; */
`

type Props = {}

const ShoppingArea = (props: Props) => {
  const [columnNumber, setColumn] = useAtom(shoppingAreaDisplayColumnAtom)
  return (
    <>
      <DisplayTitle>精選單品</DisplayTitle>
      <DisplayControlPanel>
        <IoSquareSharp size={12} color={'#999'} onClick={() => setColumn(1)} />
        <TfiLayoutGrid2Alt size={12} color={'#999'} onClick={() => setColumn(2)} />
        <TfiLayoutGrid3Alt size={12} color={'#999'} onClick={() => setColumn(3)} />
        {/* <TfiLayoutGrid4Alt size={12} color={'#999'} onClick={() => setColumn(4)} /> */}
      </DisplayControlPanel>
      <DisplayArea gap={'1rem'} columnItems={columnNumber}>
        {arr.map((item, index) => (
          <Item key={index} order={index}>
            <CardImageBlock
              image={item.image}
              alt={item.alt}
              customType={'height'}
              customHeight={`${16 / columnNumber}rem`}
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati eveniet est
              fuga. Officiis, reprehenderit ad? Enim consectetur ullam porro libero officiis nobis
              aliquid autem iusto facere aperiam, eveniet magnam?
            </div>
            <AddToCartButton />
          </Item>
        ))}
      </DisplayArea>
      <HorizontalLine />
    </>
  )
}

export default ShoppingArea
