import { atom } from 'jotai'
import { AddressType, GenderType, GoodsDeliverType, RecipientType, TimeToReceiveType } from '@/types'
import { Gender, TimeToReceive } from '@/const'

export const getGenderTypeAtom = atom(
  () => {
    const genders = [...Gender]
    const genderType = genders.flatMap((gender: typeof Gender[number]) => {
      switch (gender) {
        case 'unset': {
          return ({ type: gender, name: '無' })
        }
        case 'male': {
          return ({ type: gender, name: '先生' })
        }
        case 'female': {
          return ({ type: gender, name: '小姐' })
        }
      }
    })

    return genderType
  }
)

export const getTimeToReceiveAtom = atom(
  () => {
    const timeToReceives = [...TimeToReceive]
    const timeToReceiveType = timeToReceives.flatMap((timeToReceive: typeof TimeToReceive[number]) => {
      switch (timeToReceive) {
        case 'unset': {
          return ({ type: timeToReceive, name: '不指定' })
        }
        case 'morning': {
          return ({ type: timeToReceive, name: '13點前' })
        }
        case 'afternoon': {
          return ({ type: timeToReceive, name: '14-18點' })
        }
      }
    })

    return timeToReceiveType
  }
)

export const nameAtom = atom<string>('')
export const cellphoneAtom = atom<string>('')

const cityAtom = atom<string | -1>(-1)
export const getCityAtom = atom(get => get(cityAtom))
export const setCityAtom = atom(
  null,
  (get, set, city: string) => {
    set(cityAtom, city)
    set(districtAtom, -1)
  }
)


export const cityDataAtom = atom<string[]>([])


export const districtAtom = atom<string | -1>(-1)
export const districtDataAtom = atom<string[] | null>(null)

export const streetAtom = atom<string>('')
const addressAtom = atom(
  get => {
    const city = get(getCityAtom)
    const district = get(districtAtom)
    const street = get(streetAtom)
    if (city === -1) {
      return {
        city: undefined,
        district: undefined,
        street: street
      }

    }
    if (district === -1) {
      return {
        city: city,
        district: undefined,
        street: street
      }

    }
    return {
      city: city,
      district: district,
      street: street
    }
  }
)
export const timeToReceiveTypeAtom = atom<TimeToReceiveType>('unset')
export const genderTypeAtom = atom<GenderType>('unset')

const timeToReceiveAtom = atom<TimeToReceiveType>(
  get => {
    const timeToReceives = get(getTimeToReceiveAtom)
    const timeToReceiveType = get(timeToReceiveTypeAtom)
    console.log("🚀 ~ timeToReceiveType:", timeToReceiveType)

    return timeToReceives
      .filter(timeToReceive => timeToReceive.type === timeToReceiveType)[0].type
  }
)
const genderAtom = atom<GenderType>(
  get => {
    const genders = get(getGenderTypeAtom)
    const genderType = get(genderTypeAtom)

    return genders
      .filter(gender => gender.type === genderType)[0].type
  })
export const emailAtom = atom<string>('')
export const noteAtom = atom<string>('')

export const recipientAtom = atom<RecipientType>(
  get => {
    return ({
      name: get(nameAtom),
      cellphone: get(cellphoneAtom),
      address: get(addressAtom),
      timeToReceive: get(timeToReceiveAtom),
      gender: get(genderAtom),
      email: get(emailAtom),
      note: get(noteAtom)
    })
  }
)

const goodsDeliveryAtom = atom<GoodsDeliverType>({} as GoodsDeliverType)