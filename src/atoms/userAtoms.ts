import { atom } from 'jotai'


export const emailAtom = atom('')
export const passwordAtom = atom('')
export const confirmPasswordAtom = atom('')

export const getLoginFormAtom = atom(
  get => {
    const email = get(emailAtom)
    const password = get(passwordAtom)

    return {
      email,
      password
    }
  }
)


export const nameAtom = atom('')

export const getRegisterFormAtom = atom(
  get => {
    const name = get(nameAtom)
    const email = get(emailAtom)
    const password = get(passwordAtom)

    return {
      name,
      email,
      password
    }
  }
)