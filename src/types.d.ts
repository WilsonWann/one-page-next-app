import { StaticImageData } from "next/image"

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
