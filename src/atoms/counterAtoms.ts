import { atom } from 'jotai'

export const baseAtom = atom(1)
export const quantityAtom = atom((get) => get(baseAtom)) // read only
export const incAtom = atom(null, (_get, set) => {
  set(baseAtom, (prev) => prev + 1 > 3 ? 3 : prev + 1)
})
export const decAtom = atom(null, (_get, set) => {
  set(baseAtom, (prev) => prev - 1 < 1 ? 1 : prev - 1)
})

// continued from the previous code
