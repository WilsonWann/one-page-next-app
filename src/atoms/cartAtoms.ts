import { atom } from 'jotai'
import { CartItem, ProductModalType, ShoppingItem } from '@/types'
import { countAtom } from '.'
import { baseAtom, decAtom, incAtom, quantityAtom } from './counterAtoms'

const updateCart = (cartItems: CartItem[], id: number, quantity: number): CartItem[] => {
  return cartItems.map(item => ({
    ...item,
    quantity: item.id === id ? quantity : item.quantity,
    subtotal: item.id === id ? item.specialPrice * quantity : item.subtotal
  }))
}
const removeCart = (cartItems: CartItem[], id: number): CartItem[] => {
  return cartItems.filter(item => item.id !== id)
}
const addToCart = (cartItems: CartItem[], item: ShoppingItem, quantity: number): CartItem[] => {
  return [
    ...cartItems,
    {
      ...item,
      quantity,
      subtotal: item.specialPrice * quantity
    }
  ]
}

const getSelectedShoppingItem = (shoppingList: ShoppingItem[], id: number) => {
  return shoppingList.filter(item => item.id === id)[0]
}

const selectedIdAtom = atom<number>(-1)
export const productModalOpenAtom = atom<boolean>(false)

export const setSelectedIdAtom = atom(
  null,
  (get, set, id: number) => {
    set(selectedIdAtom, id)
    set(productModalOpenAtom, true)
  }
)


const cartListAtom = atom<CartItem[]>([])
console.log("🚀 ~ file: cartAtoms.ts:47 ~ cartListAtom:", cartListAtom)
export const shoppingListAtom = atom<ShoppingItem[]>([])
export const selectedShoppingItemAtom = atom(get =>
  getSelectedShoppingItem(get(shoppingListAtom), get(selectedIdAtom))
)

export const getCartAtom = atom(get => get(cartListAtom))
export const addToCartAtom = atom(
  null,
  (get, set) => {
    set(cartListAtom, addToCart(get(cartListAtom), get(selectedShoppingItemAtom), get(baseAtom)))
    set(baseAtom, 1)
    set(selectedIdAtom, -1)
    set(productModalOpenAtom, false)
  }
)
// const updateCartAtom = atom()
export const removeCartAtom = atom(
  null,
  (get, set, id: number) => {
    set(cartListAtom, removeCart(get(cartListAtom), id))
  }
)

export const dispatchAtom = atom(
  null,
  (get, set, { type, id }: { type: string, id: number }) => {
    switch (type) {
      case 'INC': {
        set(incAtom)
        set(cartListAtom, updateCart(get(cartListAtom), id, get(quantityAtom)))
      } break;
      case 'DEC': {
        set(decAtom)
        set(cartListAtom, updateCart(get(cartListAtom), id, get(quantityAtom)))
      } break;
      default:
        throw new Error('unknown action')
    }
  }
)