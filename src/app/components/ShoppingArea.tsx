import React from 'react'
import styled from '@emotion/styled'

import wilson from '../../assets/wilson.jpg'
import gubami from '../../assets/gubami.jpg'
import lalaport from '../../assets/lalaport.jpg'
import sansanyakiniku from '../../assets/sansanyakiniku.png'
import pokemon from '../../assets/pokemon.jpg'
import mcdonald from '../../assets/mcdonald.png'
import scheduled from '../../assets/scheduled.jpg'

import { IoSquareSharp } from 'react-icons/io5'
import { TfiLayoutGrid2Alt, TfiLayoutGrid3Alt, TfiLayoutGrid4Alt } from 'react-icons/tfi'
import { useAtom } from 'jotai'
import { shoppingAreaDisplayColumnAtom } from '@/atoms/routingAtoms'
import HorizontalLine from './HorizontalLine'
import DisplayTitle from './DisplayTitle'
import CardItem from './CardItem'
import { ShoppingItem } from '@/types'

const arr: ShoppingItem[] = [
  {
    image: wilson,
    alt: 'Wilson',
    title: '超值金排球禮盒組',
    subtitle: '送禮首選～原價1860，特價1500，限時春節早鳥優惠再9.5折',
    content: '精緻金排球*1顆\n禮盒*1盒\n沒用氣泡紙*10堆',
    price: 1860,
    specialPrice: 1500
  },
  {
    image: gubami,
    alt: '牛肉麵',
    title: '超值牛肉麵禮盒組',
    subtitle: '送禮首選～原價19900，特價100，限時春節早鳥優惠再10折',
    content: '過期牛肉麵*2組\n禮盒*1盒\n衛生筷*10雙',
    price: 19900,
    specialPrice: 100
  },
  {
    image: lalaport,
    alt: '拉拉寶都對面臭豆腐',
    title: '拉拉寶都對面臭豆腐',
    subtitle: '最多人私訊詢問的組合，所以我們上架啦～',
    content: '臭到家臭豆腐*100片\n不辣免錢麻辣鴨血*100片\n湯底*10包\n*請自備餐具',
    price: 1900,
    specialPrice: 1800
  },
  {
    image: sansanyakiniku,
    alt: '姍姍燒肉',
    title: 'VIP專屬六入組',
    subtitle: '團購超值組(超商限量最多6入)',
    content: '姍姍燒肉*6入',
    price: 10_000_001,
    specialPrice: 10_000_000
  },
  {
    image: scheduled,
    alt: '時刻表',
    title: '時刻表-四入組(增量版)',
    subtitle: '熱銷NO.1',
    content: '一入270g\n一組4罐\n辣度:中辣',
    price: 1000,
    specialPrice: 800
  },
  {
    image: pokemon,
    alt: '皮卡丘',
    title: '獨家皮卡丘二XO醬入組',
    subtitle: '新春限定優惠組合',
    content: '港式臘味干貝XO醬*2瓶\n皮卡丘*2隻',
    price: 1860,
    specialPrice: 1500
  },
  {
    image: mcdonald,
    alt: '麥當勞',
    title: '好食成雙組',
    subtitle: '高貴雙享組',
    content: '勁辣雞腿堡*1顆\n可樂*10杯\n大薯*100包',
    price: 930,
    specialPrice: 880
  }
]

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
  row-gap: 3rem;
  margin-bottom: 2rem;
`

type Props = {}

const ShoppingArea = (props: Props) => {
  const [columnNumber, setColumn] = useAtom(shoppingAreaDisplayColumnAtom)
  return (
    <>
      <DisplayTitle title={'精選單品'} />
      <DisplayControlPanel>
        <IoSquareSharp size={12} color={'#999'} onClick={() => setColumn(1)} />
        <TfiLayoutGrid2Alt size={12} color={'#999'} onClick={() => setColumn(2)} />
        <TfiLayoutGrid3Alt size={12} color={'#999'} onClick={() => setColumn(3)} />
        {/* <TfiLayoutGrid4Alt size={12} color={'#999'} onClick={() => setColumn(4)} /> */}
      </DisplayControlPanel>
      <DisplayArea gap={'1rem'} columnItems={columnNumber}>
        {arr.map((item, index) => (
          <CardItem key={index} item={item} />
          // <Item key={index} order={index}>
          //   <CardImageBlock
          //     image={item.image}
          //     alt={item.alt}
          //     customType={'height'}
          //     customHeight={`${16 / columnNumber}rem`}
          //   />
          //   <h3
          //     style={{
          //       display: 'flex',
          //       flexDirection: 'column',
          //       alignItems: 'center',
          //       gap: '0.5rem'
          //     }}
          //   >
          //     {item.title}
          //     <small style={{ color: 'red' }}>{item.subtitle}</small>
          //   </h3>
          //   <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}>
          //     <div
          //       style={{
          //         textDecoration: 'line-through',
          //         textDecorationColor: 'red',
          //         textDecorationThickness: '2px'
          //       }}
          //     >
          //       原價：{item.price}
          //     </div>
          //     <div style={{ color: 'red' }}>現在特價只要{item.specialPrice}元</div>
          //   </div>
          //   <small style={{ color: 'grey', whiteSpace: 'pre-wrap', textAlign: 'center' }}>
          //     {item.content}
          //   </small>

          //   <AddToCartButton />
          // </Item>
        ))}
      </DisplayArea>
      <HorizontalLine />
    </>
  )
}

export default ShoppingArea
