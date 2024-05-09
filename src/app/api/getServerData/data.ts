import { ShoppingItem } from '@/types'
import wilson from '@/assets/wilson.jpg'
import gubami from '@/assets/gubami.jpg'
import lalaport from '@/assets/lalaport.jpg'
import sansanyakiniku from '@/assets/sansanyakiniku.png'
import pokemon from '@/assets/pokemon.jpg'
import mcdonald from '@/assets/mcdonald.png'
import scheduled from '@/assets/scheduled.jpg'

export const shoppingList: ShoppingItem[] = [
  {
    id: 0,
    image: {
      src: '/wilson.jpg',
      alt: 'Wilson',
    },
    title: '超值金排球禮盒組',
    subtitle: '送禮首選～原價1860，特價1500，限時春節早鳥優惠再9.5折',
    content: '精緻金排球*1顆\n禮盒*1盒\n沒用氣泡紙*10堆',
    price: 1860,
    specialPrice: 1500,
    maxQuantity: 2
  },
  {
    id: 1,
    image: {
      src: '/gubami.jpg',
      alt: '牛肉麵',
    },
    title: '超值牛肉麵禮盒組',
    subtitle: '送禮首選～原價19900，特價100，限時春節早鳥優惠再10折',
    content: '過期牛肉麵*2組\n禮盒*1盒\n衛生筷*10雙',
    price: 19900,
    specialPrice: 100,
    maxQuantity: 1
  },
  {
    id: 2,
    image: {
      src: '/lalaport.jpg',
      alt: '拉拉寶都對面臭豆腐',
    },
    title: '拉拉寶都對面臭豆腐',
    subtitle: '最多人私訊詢問的組合，所以我們上架啦～',
    content: '臭到家臭豆腐*100片\n不辣免錢麻辣鴨血*100片\n湯底*10包\n*請自備餐具',
    price: 1900,
    specialPrice: 1800
  },
  {
    id: 3,
    image: {
      src: '/sansanyakiniku.png',
      alt: '姍姍燒肉',
    },
    title: 'VIP專屬六入組',
    subtitle: '團購超值組(超商限量最多6入)',
    content: '姍姍燒肉*6入',
    price: 10_000_001,
    specialPrice: 10_000_000
  },
  {
    id: 4,
    image: {
      src: '/scheduled.jpg',
      alt: '時刻表',
    },
    title: '時刻表-四入組(增量版)',
    subtitle: '熱銷NO.1',
    content: '一入270g\n一組4罐\n辣度:中辣',
    price: 1000,
    specialPrice: 800,
    maxQuantity: 5
  },
  {
    id: 5,
    image: {
      src: '/pokemon.jpg',
      alt: '皮卡丘',
    },
    title: '獨家皮卡丘二XO醬入組',
    subtitle: '新春限定優惠組合',
    content: '港式臘味干貝XO醬*2瓶\n皮卡丘*2隻',
    price: 1860,
    specialPrice: 440,
    maxQuantity: 10
  },
  {
    id: 6,
    image: {
      src: '/mcdonald.png',
      alt: '麥當勞',
    },
    title: '好食成雙組',
    subtitle: '高貴雙享組',
    content: '勁辣雞腿堡*1顆\n可樂*10杯\n大薯*100包',
    price: 930,
    specialPrice: 880
  }
]