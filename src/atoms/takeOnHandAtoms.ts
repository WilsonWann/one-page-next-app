import { atom } from 'jotai'
import { ErrorProps, ProductErrorProps, QuantityProps, ShoppingItem, TakeOnHandItem } from '@/types'
import { counterAtom, shoppingListAtom, getTakeOnHandItemIdAtom, productModalOpenAtom } from '.'
import { useFieldArray } from 'react-hook-form'

const setTakeOnHandItemError = (onHandItem: TakeOnHandItem, isError: boolean, limit?: number) => {
  //   console.log("🚀 ~ file: counterAtoms.ts:20 ~ setCartItemError ~ cartItem:", onHandItem)
  //   if (isError === true) {
  //     switch (error?.errorType) {
  //       case 'upperBound': {
  //         onHandItem.error = {
  //           errorType: 'upperBound',
  //           errorMessage: `最高為：${limit}`
  //         }
  //       } break;
  //       case 'lowerBound': {
  //         onHandItem.error = {
  //           errorType: 'lowerBound',
  //           errorMessage: '最低為：1'
  //         }
  //       } break;

  //       default:
  //         throw new Error('unknown errorType')
  //     }
  //   } else {
  //     if (onHandItem.error) {
  //       onHandItem.error = undefined
  //     }
  //   }
}

const getTakeOnHandItem = (shoppingList: ShoppingItem[], id: number) => {
  return shoppingList.filter(item => item.id === id)
    .map(item => ({
      ...item,
      quantity: 1,
      subtotal: item.specialPrice
    }) satisfies TakeOnHandItem)[0]
}

const getTakeOnHandItemAvailableQuantity = (onHandItem: TakeOnHandItem, type: "INC" | "DEC"): (QuantityProps & ProductErrorProps) => {
  const takeOnHandItem = onHandItem!
  const quantity = type === 'INC' ? takeOnHandItem.quantity + 1 : takeOnHandItem.quantity - 1
  const maxQuantity = takeOnHandItem.maxQuantity ?? 3
  if (quantity < 1) {
    return {
      quantity: 1,
      error: {
        errorType: 'lowerBound',
        errorMessage: '最低為：1'
      }
    }
  } else if (quantity > maxQuantity) {
    return {
      quantity: maxQuantity,
      error: {
        errorType: 'lowerBound',
        errorMessage: `最高為：${maxQuantity}`
      }
    }
  } else {
    // setTakeOnHandItemError(onHandItem, false)
    return { quantity: quantity, error: undefined }
  }
}

// const updateTakeOnHandItem = (onHandItem: TakeOnHandItem, type: "INC" | "DEC") => {
//   console.log("🚀 ~ file: takeOnHandAtoms.ts:73 ~ updateTakeOnHandItem ~ onHandItem:", onHandItem)
//   console.log("🚀 ~ file: takeOnHandAtoms.ts:73 ~ updateTakeOnHandItem ~ type:", type)
//   if (!onHandItem) return undefined

//   const quantity = getTakeOnHandItemAvailableQuantity(onHandItem, type)
//   console.log("🚀 ~ file: takeOnHandAtoms.ts:63 ~ updateTakeOnHandItem ~ quantity:", quantity)
//   if (!quantity) return undefined
//   const subtotal = onHandItem.specialPrice * quantity
//   const newItem = {
//     ...onHandItem,
//     quantity,
//     subtotal
//   } satisfies TakeOnHandItem
//   return newItem
// }

export const takeOnHandAtom = atom<TakeOnHandItem>(undefined)

export const productModalErrorAtom = atom<ProductErrorProps>({})

// const setProductModalWarningAtom = atom(
//   null,
//   (get, set, type: "INC" | "DEC") => {
//     const quantity = getTakeOnHandItemAvailableQuantity(get(takeOnHandAtom), type)
//     set(productModalWarningAtom, setTakeOnHandItemError)
//   }
// )


export const setTakeOnHandItemAtom = atom(
  null,
  (get, set) => {
    set(takeOnHandAtom, getTakeOnHandItem(get(shoppingListAtom), get(getTakeOnHandItemIdAtom)))
  }
)

export const updateTakeOnHandItemAtom = atom(
  null,
  (get, set, type: "INC" | "DEC") => {
    const onHandItem = get(takeOnHandAtom)
    if (!onHandItem) return undefined
    const { quantity, error } = getTakeOnHandItemAvailableQuantity(onHandItem, type)
    if (!quantity) return undefined
    const subtotal = onHandItem.specialPrice * quantity
    const newItem = {
      ...onHandItem,
      quantity,
      subtotal
    } satisfies TakeOnHandItem
    set(takeOnHandAtom, newItem)

    set(productModalErrorAtom, { error })
  }
)