import { atom } from 'jotai'
import { RESET } from 'jotai/utils'
import { AddressType, GenderType, GoodsDeliverType, RecipientType, TimeToReceiveType } from '@/types'
import { Gender, TimeToReceive } from '@/const'
import { storage_DefaultAddressCheckedAtom, storage_AddressAtom } from './storageAtoms'

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

export const receiptNameAtom = atom<string>('')

export const cellphoneAtom = atom<string>('')

const cityAtom = atom<string | -1>(-1)
export const getCityAtom = atom(get => {
  const favoriteAddress = get(storage_AddressAtom)
  if (favoriteAddress) {
    const { city } = favoriteAddress
    return city
  }
  return get(cityAtom)
})
export const setCityAtom = atom(
  null,
  (get, set, city: string | -1) => {
    set(cityAtom, city)
    set(districtAtom, -1)
  }
)
export const cityDataAtom = atom<string[]>([])

const districtAtom = atom<string | -1>(-1)
export const getDistrictAtom = atom(get => {
  const favoriteAddress = get(storage_AddressAtom)
  if (favoriteAddress) {
    const { district } = favoriteAddress
    return district
  }
  return get(districtAtom)
})

export const setDistrictAtom = atom(
  null,
  (get, set, district: string | -1) => {
    set(districtAtom, district)
  }
)

export const districtDataAtom = atom<string[] | null>(null)

const streetAtom = atom<string>('')

export const getStreetAtom = atom(get => {
  const favoriteAddress = get(storage_AddressAtom)
  if (favoriteAddress) {
    const { street } = favoriteAddress
    return street
  }
  return get(streetAtom)
})

export const setStreetAtom = atom(
  null,
  (get, set, street: string) => {
    set(streetAtom, street)
  }
)

const addressAtom = atom(
  get => {
    const city = get(getCityAtom)
    const district = get(getDistrictAtom)
    const street = get(getStreetAtom)
    return {
      city: city,
      district: district,
      street: street
    }
  }
)

const defaultAddressAtom = atom<boolean>(false)
export const getDefaultAddressAtom = atom(get => get(storage_DefaultAddressCheckedAtom) || get(defaultAddressAtom))
export const setDefaultAddressAtom = atom(
  null,
  (get, set, defaultAddress: boolean) => {
    set(defaultAddressAtom, defaultAddress)
    set(storage_DefaultAddressCheckedAtom, defaultAddress)
  }
)

export const timeToReceiveTypeAtom = atom<TimeToReceiveType>('unset')
export const genderTypeAtom = atom<GenderType>('unset')

export const timeToReceiveAtom = atom<TimeToReceiveType>(
  get => {
    const timeToReceives = get(getTimeToReceiveAtom)
    const timeToReceiveType = get(timeToReceiveTypeAtom)

    return timeToReceives
      .filter(timeToReceive => timeToReceive.type === timeToReceiveType)[0].type
  }
)
export const genderAtom = atom<GenderType>(
  get => {
    const genders = get(getGenderTypeAtom)
    const genderType = get(genderTypeAtom)

    return genders
      .filter(gender => gender.type === genderType)[0].type
  })
export const receiptEmailAtom = atom<string>('')
export const noteAtom = atom<string>('')

const recipientAtom = atom<RecipientType>({} as RecipientType)
export const getRecipientAtom = atom(
  get => {
    return {
      name: get(receiptNameAtom),
      cellphone: get(cellphoneAtom),
      address: get(addressAtom),
      timeToReceive: get(timeToReceiveAtom),
      gender: get(genderAtom),
      email: get(receiptEmailAtom),
      note: get(noteAtom)
    }
  }
)

const validateCityAtom = atom<string>('')
const getValidateCityAtom = atom<string>(get => get(validateCityAtom))
const setValidateCityAtom = atom(
  null,
  (get, set, city: string) => {
    set(validateCityAtom, city)
  }
)
const validateDistrictAtom = atom<string>('')
const getValidateDistrictAtom = atom<string>(get => get(validateDistrictAtom))
const setValidateDistrictAtom = atom(
  null,
  (_get, set, district: string) => {
    set(validateDistrictAtom, district)
  }
)

const getValidateAddressAtom = atom<AddressType>(
  get => get(storage_AddressAtom) ?? ({
    city: get(getValidateCityAtom),
    district: get(getValidateDistrictAtom),
    street: get(streetAtom)
  })
)

export const setValidateAddressAtom = atom(
  null,
  (get, set, city: string, district: string) => {
    set(setValidateCityAtom, city)
    set(setValidateDistrictAtom, district)

    if (get(getDefaultAddressAtom)) {
      set(storage_AddressAtom, get(getValidateAddressAtom))
    } else {
      set(storage_AddressAtom, RESET)
    }
  }
)
export const getValidateRecipientAtom = atom(
  get => {
    return {
      name: get(receiptNameAtom),
      cellphone: get(cellphoneAtom),
      address: get(getValidateAddressAtom),
      timeToReceive: get(timeToReceiveAtom),
      gender: get(genderAtom),
      email: get(receiptEmailAtom),
      note: get(noteAtom)
    }
  }
)
