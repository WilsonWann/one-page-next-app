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

type CartItem = ShoppingItem & QuantityProps

type ProductModalType = {
  modalOpen: boolean
  selectedItem: ShoppingItem | null
} 