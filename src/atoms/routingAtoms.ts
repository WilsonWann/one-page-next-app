import { atom } from 'jotai'
import { ProductModalType } from '@/types'

export const navbarOpenAtom = atom<boolean>(false)
export const shoppingAreaDisplayColumnAtom = atom<number>(1)
// const selectedItemAtom = atom<CartItem>(get())
