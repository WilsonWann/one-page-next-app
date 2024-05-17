import { StaticImageData } from "next/image"
import { Logistics, InStorePickup, Payment, LogisticsMode, Gender, TimeToReceive } from '@/const'

type Image = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  blurDataURL?: string
}

type ShoppingItem = {
  id: number
  image?: Image
  title: string;
  subtitle: string;
  content: string;
  price: number;
  specialPrice: number;
  maxQuantity?: number
}


type QuantityProps = {
  quantity: number
  subtotal: number
}

type DefaultErrorProps = {
  errorType: string,
  errorMessage: string
}

type UpperErrorProps = {
  errorType: 'upperBound',
  errorMessage: string
}

type LowerErrorProps = {
  errorType: 'lowerBound',
  errorMessage: string
}

type CartEmptyProps = {
  errorType: 'cartEmpty',
  errorMessage: string
}

type ProductErrorProps = { error?: ErrorProps }

type ErrorProps = DefaultErrorProps | UpperErrorProps | LowerErrorProps | CartEmptyProps

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

type TimeToReceiveType = typeof TimeToReceive[number]
type GenderType = typeof Gender[number]
type AddressType = {
  city: string
  district: string
  street: string
}
type RecipientType = {
  name: string
  cellphone: string
  address: AddressType
  timeToReceive: string
  gender: GenderType
  email: string
  note: string
}

type GoodsDeliverType = {
  logistics: LogisticsProps
  cartItems: CartItem[]
  subtotal: number
  recipient: RecipientType
}

type ReceiptProps = {
  receiptType: string;
  carrierType?: string;
  donate?: string;
  heading?: string;
  guiNumber?: string;
  citizenIdentity?: string;
  phoneBarcode?: string;
  memberCarrier?: string;
};

type OptionType = {
  value: string;
  label: string;
};


/**
 * Change the type of Keys of T from NewType
 */
export type ChangeTypeOfKeys<
  T extends object,
  Keys extends keyof T,
  NewType
> = {
    // Loop to every key. We gonna check if the key
    // is assignable to Keys. If yes, change the type.
    // Else, retain the type.
    [key in keyof T]: key extends Keys ? NewType : T[key]
  }

/**
 * Change the type of Keys of T from NewType
 */
export type ChangeType<
  T extends object,
  NewType
> = {
    // Loop to every key. We gonna check if the key
    // is assignable to Keys. If yes, change the type.
    // Else, retain the type.
    [key in keyof T]: NewType
  }