import React, { useEffect } from 'react'
import { BlockTitle, BlockContent } from './FormBlock'
import { useAtom } from 'jotai'
import { cityDataAtom, setCityAtom } from '@/atoms'

const CityBlock = () => {
  const [cityData, setCityData] = useAtom(cityDataAtom)
  const [, setCity] = useAtom(setCityAtom)

  useEffect(() => {
    function getCityData() {
      fetch('/api/getCity')
        .then((res) => res.json())
        .then((data: string[]) => setCityData(data))
    }

    getCityData()
  }, [setCityData])

  return (
    <>
      <BlockTitle htmlFor={'country'}>縣市</BlockTitle>
      <BlockContent>
        <select
          id='country'
          name='country'
          onChange={(e) => setCity(e.target.value)}
          defaultValue={-1}
        >
          <option value={-1}>請選擇</option>
          {cityData.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </BlockContent>
    </>
  )
}

export default CityBlock
