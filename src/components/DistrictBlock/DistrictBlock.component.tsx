import React, { useEffect } from 'react';
import {
  BlockTitle,
  BlockContent,
  BlockCol,
  Block,
} from '@/components/FormBlock/FormBlock.component';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  getCityAtom,
  districtDataAtom,
  setDistrictAtom,
  getDistrictAtom,
} from '@/atoms';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import { storage_AddressAtom } from '@/atoms/storageAtoms';

type Props = {
  error?: any;
  required?: boolean;
};

const DistrictBlock = (props: Props) => {
  const favoriteAddress = useAtomValue(storage_AddressAtom);
  const { error, required } = props;
  const selectedCity = useAtomValue(getCityAtom);
  const [districtData, setDistrictData] = useAtom(districtDataAtom);
  const selectedDistrict = useAtomValue(getDistrictAtom);
  const setDistrict = useSetAtom(setDistrictAtom);

  useEffect(() => {
    function getDistrictData(city: string | -1) {
      fetch(`/api/getDistrict?city=${city}`)
        .then((res) => res.json())
        .then((data: string[] | null) => setDistrictData(data))
        .catch((err) => console.error('🚀 ~ .then ~ err:', err));
    }

    getDistrictData(selectedCity);
  }, [selectedCity, setDistrictData]);

  useEffect(() => {
    setDistrict(favoriteAddress?.district || -1);
  }, [favoriteAddress]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    return setDistrict(event.target.value === '-1' ? -1 : event.target.value);
  };

  return (
    <BlockCol>
      <Block required={required} error={error?._errors[0]}>
        <BlockTitle htmlFor={'district'}>區域</BlockTitle>
        <BlockContent>
          <select
            id='district'
            name='district'
            value={selectedDistrict}
            onChange={handleSelectChange}
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
      </Block>
      {/* <ErrorMessage error={error._errors[0]} /> */}
    </BlockCol>
  );
};

export default DistrictBlock;
