import { atom } from 'jotai'
import { CartItem, ErrorProps, TakeOnHandItem } from '@/types'
import { takeOnHandAtom, productModalOpenAtom, resetCounterAtom, resetTakeOnHandItemIdAtom } from '.'


const setCartItemError = (cartItem: CartItem, isError: boolean, limit?: number, error?: ErrorProps) => {
  console.log("🚀 ~ file: counterAtoms.ts:20 ~ setCartItemError ~ cartItem:", cartItem)
  if (isError === true) {
    switch (error?.errorType) {
      case 'upperBound': {
        cartItem.error = {
          errorType: 'upperBound',
          errorMessage: `最高為：${limit}`
        }
      } break;
      case 'lowerBound': {
        cartItem.error = {
          errorType: 'lowerBound',
          errorMessage: '最低為：1'
        }
      } break;

      default:
        throw new Error('unknown errorType')
    }
  } else {
    if (cartItem.error) {
      cartItem.error = undefined
    }
  }
}

const getCartItemAvailableQuantity = (cartItem: CartItem, type: "INC" | "DEC"): number => {
  const quantity = type === 'INC' ? cartItem.quantity + 1 : cartItem.quantity - 1
  const maxQuantity = cartItem.maxQuantity ?? 3
  if (quantity < 1) {
    setCartItemError(cartItem, true, 1, { errorType: 'lowerBound' })
    return 1
  } else if (quantity > maxQuantity) {
    setCartItemError(cartItem, true, maxQuantity, { errorType: 'upperBound' })
    return maxQuantity
  } else {
    setCartItemError(cartItem, false)
    return quantity
  }
}

export const updateCart = (cartItems: CartItem[], id: number, type: "INC" | "DEC"): CartItem[] => {
  const selectedIndex = cartItems.findIndex(item => item.id === id)
  if (selectedIndex === -1) return cartItems

  const selectedItem = cartItems.at(selectedIndex)!
  const quantity = getCartItemAvailableQuantity(selectedItem, type)
  const subtotal = selectedItem.specialPrice * quantity
  const newItem = {
    ...selectedItem,
    quantity,
    subtotal
  } satisfies CartItem
  return cartItems.toSpliced(selectedIndex, 1, newItem)
}
const removeCart = (cartItems: CartItem[], id: number): CartItem[] => {
  return cartItems.filter(item => item.id !== id)
}
const addToCart = (cartItems: CartItem[], onHandItem: TakeOnHandItem): CartItem[] => {
  if (!onHandItem) return cartItems
  if (cartItems.some(cartItem => cartItem.id === onHandItem.id)) {
    const selectedItem = cartItems.find(cartItem => cartItem.id === onHandItem.id)!
    return [
      ...cartItems.filter(cartItem => cartItem.id !== onHandItem.id),
      {
        ...selectedItem,
        quantity: selectedItem.quantity + onHandItem.quantity,
        subtotal: selectedItem.subtotal * (selectedItem.specialPrice * onHandItem.quantity)
      }
    ]
  }
  return [
    ...cartItems,
    {
      ...onHandItem,
    }
  ]
}

const cartListAtom = atom<CartItem[]>([])
export const getCartListAtom = atom(get => get(cartListAtom))

export const addToCartAtom = atom(
  null,
  (get, set) => {
    set(cartListAtom, addToCart(get(getCartListAtom), get(takeOnHandAtom)))
    set(resetCounterAtom)
    set(resetTakeOnHandItemIdAtom)
    set(productModalOpenAtom, false)
  }
)

export const removeCartAtom = atom(
  null,
  (get, set, id: number) => {
    set(cartListAtom, removeCart(get(getCartListAtom), id))
  }
)

export const updateCartAtom = atom(
  null,
  (get, set, id: number, type: "INC" | "DEC") => {
    set(cartListAtom, updateCart(get(getCartListAtom), id, type))
  }
)
