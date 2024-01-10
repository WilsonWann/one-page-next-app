import React, { useEffect } from 'react'
import { BlockTitle, BlockContent } from './FormBlock'
import { useAtom } from 'jotai'
import { getCityAtom, districtDataAtom, districtAtom } from '@/atoms'

type Props = {}

const DistrictBlock = (props: Props) => {
  const [selectedCity] = useAtom(getCityAtom)
  const [districtData, setDistrictData] = useAtom(districtDataAtom)
  const [selectedDistrict, setDistrict] = useAtom(districtAtom)
  console.log('🚀 ~ HomeDeliveryBlocks ~ selectedDistrict:', selectedDistrict)

  useEffect(() => {
    function getDistrictData(city: string | -1) {
      fetch(`/api/getDistrict?city=${city}`)
        .then((res) => res.json())
        .then((data: string[] | null) => setDistrictData(data))
        .catch((err) => console.error('🚀 ~ .then ~ err:', err))
    }

    getDistrictData(selectedCity)
  }, [selectedCity, setDistrictData])

  return (
    <>
      <BlockTitle htmlFor={'district'}>區域</BlockTitle>
      <BlockContent>
        <select
          id='district'
          name='district'
          value={selectedDistrict}
          onChange={(e) => setDistrict(e.target.value)}
        >
          {districtData ? (
            <>
              <option value={-1}>請選擇</option>
              {districtData.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </>
          ) : (
            <option value={''}>請先選擇縣市</option>
          )}
        </select>
      </BlockContent>
    </>
  )
}

export default DistrictBlock
