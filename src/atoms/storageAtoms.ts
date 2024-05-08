
import { atomWithStorage } from 'jotai/utils'
import { AddressType, CartItem } from '@/types';

export const storage_CartItemsAtom = atomWithStorage<CartItem[]>('cart_items', []);

export const storage_DefaultAddressCheckedAtom = atomWithStorage<boolean>('favorite_address_checked', false);
export const storage_AddressAtom = atomWithStorage<AddressType | null>('favorite_address', null);
