import { atom } from 'jotai'
import { cartMaxLimit } from '@/const'
import { CartErrorProps, CartItem, ErrorProps, TakeOnHandItem } from '@/types'
import { takeOnHandAtom, productModalOpenAtom, resetCounterAtom, resetTakeOnHandItemIdAtom, resetProductModalErrorAtom } from '.'

function generateError(quantity: number, maxQuantity: number): ErrorProps | undefined {
  if (quantity < 1) {
    return {
      errorType: 'lowerBound',
      errorMessage: '最低為：1'
    } satisfies ErrorProps
  } else if (quantity > maxQuantity) {
    return {
      errorType: 'upperBound',
      errorMessage: `最高為：${maxQuantity}`
    } satisfies ErrorProps
  } else {
    return undefined
  }
}
function getCartItemQuantity(cartItem: CartItem, type: "INC" | "DEC"): number {
  const quantity = type === 'INC' ? cartItem.quantity + 1 : cartItem.quantity - 1
  const maxQuantity = cartItem.maxQuantity ?? 3

  const error = generateError(quantity, maxQuantity)
  cartItem.error = error
  if (!error) {
    return quantity
  } else if (error.errorType === 'lowerBound') {
    return 1
  } else {
    return maxQuantity
  }
}

export function updateCart(cartItems: CartItem[], id: number, type: "INC" | "DEC"): CartItem[] {
  const selectedIndex = cartItems.findIndex(item => item.id === id)
  if (selectedIndex === -1) return cartItems

  const selectedItem = cartItems.at(selectedIndex)!
  const quantity = getCartItemQuantity(selectedItem, type)
  const subtotal = selectedItem.specialPrice * quantity
  const newItem = {
    ...selectedItem,
    quantity,
    subtotal
  } satisfies CartItem
  return cartItems.toSpliced(selectedIndex, 1, newItem)
}
function removeCart(cartItems: CartItem[], id: number): CartItem[] {
  return cartItems.filter(item => item.id !== id)
}
function addToCart(cartItems: CartItem[], onHandItem: TakeOnHandItem | undefined): CartItem[] {
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

function countCartAndOnHand(cartItems: CartItem[], onHandItem: TakeOnHandItem | undefined): number {
  // no onHandItem
  if (!onHandItem) return cartItems.reduce((acc, curr) => acc + curr.quantity, 0)

  return cartItems.reduce((acc, curr) => acc + curr.quantity, 0) + onHandItem.quantity

}

const cartMaxLimitAtom = atom<number>(cartMaxLimit)
const cartListAtom = atom<CartItem[]>([])
const resetCartErrorModalAtom = atom(
  null,
  (_get, set) => {
    set(cartErrorModalAtom, {})
  }
)

export const cartErrorModalAtom = atom<CartErrorProps>({})
export const getCartItemQuantityAtom = atom(get => get(getCartListAtom).reduce((acc, curr) => acc + curr.quantity, 0))
export const getCartListSubtotalAtom = atom(get => get(getCartListAtom).reduce((acc, curr) => acc + curr.subtotal, 0))

export const getCartListAtom = atom(get => get(cartListAtom))

export const addToCartAtom = atom(
  null,
  (get, set) => {
    const total = countCartAndOnHand(get(getCartListAtom), get(takeOnHandAtom))
    if (total > get(cartMaxLimitAtom)) {
      set(cartErrorModalAtom, {
        error: {
          errorType: 'upperBound',
          errorMessage: `一般商品最多只能購買${get(cartMaxLimitAtom)}件`
        }
      })
      setTimeout(() => {
        set(resetCartErrorModalAtom)
      }, 2000)
      return
    }

    set(resetCartErrorModalAtom)
    set(cartListAtom, addToCart(get(getCartListAtom), get(takeOnHandAtom)))
    set(resetCounterAtom)
    set(resetTakeOnHandItemIdAtom)
    set(productModalOpenAtom, false)
    set(resetProductModalErrorAtom)
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
    const total = countCartAndOnHand(get(getCartListAtom), undefined)
    if (total > get(cartMaxLimitAtom)) {
      set(cartErrorModalAtom, {
        error: {
          errorType: 'upperBound',
          errorMessage: `一般商品最多只能購買${get(cartMaxLimitAtom)}件`
        }
      })
      setTimeout(() => {
        set(cartListAtom, updateCart(get(getCartListAtom), id, type === 'INC' ? 'DEC' : 'INC'))
        set(resetCartErrorModalAtom)
      }, 2000)
      return
    }

    set(resetCartErrorModalAtom)

  }
)
