import { ReceiptProps } from '@/types'
import { atom } from 'jotai'

export const receiptAtom = atom<ReceiptProps | null>(null)