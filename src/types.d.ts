import { StaticImageData } from "next/image"
import { Logistics, InStorePickup, Payment, LogisticsMode } from '@/const'

type ShoppingItem = {
  id: number
  image: StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
  content: string;
  price: number;
  specialPrice: number;
  maxQuantity?: number
}

type OrderProps = {
  order: number
}
type QuantityProps = {
  quantity: number
  subtotal: number
}

type UpperErrorProps = {
  errorType: 'upperBound',
  errorMessage: string
}

type LowerErrorProps = {
  errorType: 'lowerBound',
  errorMessage: string
}

type ProductErrorProps = { error?: ErrorProps }

type ErrorProps = UpperErrorProps | LowerErrorProps

type TakeOnHandItem = (ShoppingItem & QuantityProps)

type CartItem = ShoppingItem & QuantityProps & { error?: ErrorProps }

type CartErrorProps = ProductErrorProps

type HomeDeliveryType = {
  logisticsType: typeof Logistics[0]
  logisticsMode: typeof LogisticsMode[0]
  logisticsName: '宅配(台灣本島)'
  freight?: 130
  payment: typeof Payment[1 | 2 | 3 | 4]
}
type SevenElevenPickupType = {
  logisticsType: typeof Logistics[1]
  logisticsMode: typeof LogisticsMode[1]
  logisticsName: '7-11超商取貨'
  freight?: 65
  payment: typeof Payment[number]
}
type FamilyMartPickupType = {
  logisticsType: typeof Logistics[2]
  logisticsMode: typeof LogisticsMode[1]
  logisticsName: '全家超商取貨'
  freight?: 70
  payment: typeof Payment[number]
}

type HiLifePickupType = {
  logisticsType: typeof Logistics[3]
  logisticsMode: typeof LogisticsMode[1]
  logisticsName: '萊爾富超商取貨'
  freight?: 60
  payment: typeof Payment[number]
}

type LogisticsProps = HomeDeliveryType | SevenElevenPickupType | FamilyMartPickupType | HiLifePickupType

type Coupon = {
  code: string
  name: string
  description: string
  threshold: number
  active: boolean
}