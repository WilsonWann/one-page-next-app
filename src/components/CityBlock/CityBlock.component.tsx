import React, { useEffect } from 'react';
import {
  BlockCol,
  BlockTitle,
  BlockContent,
  Block,
} from '@/components/FormBlock/FormBlock.component';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { cityDataAtom, setCityAtom, getCityAtom } from '@/atoms';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.component';
import { storage_AddressAtom } from '@/atoms/storageAtoms';

type Props = {
  error?: any;
  required?: boolean;
};

const CityBlock = (props: Props) => {
  const favoriteAddress = useAtomValue(storage_AddressAtom);
  console.log('🚀 ~ CityBlock ~ favoriteAddress:', favoriteAddress);
  const { error, required } = props;
  const [cityData, setCityData] = useAtom(cityDataAtom);
  const selectedCity = useAtomValue(getCityAtom);
  const setCity = useSetAtom(setCityAtom);

  useEffect(() => {
    function getCityData() {
      fetch('/api/getCity')
        .then((res) => res.json())
        .then((data: string[]) => setCityData(data));
    }

    getCityData();
  }, [setCityData]);

  useEffect(() => {
    setCity(favoriteAddress?.city || -1);
  }, [favoriteAddress]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    return setCity(event.target.value === '-1' ? -1 : event.target.value);
  };
  return (
    <>
      <BlockCol>
        <Block required={required} error={error?._errors[0]}>
          <BlockTitle htmlFor={'country'}>縣市</BlockTitle>
          <BlockContent>
            <select
              id='country'
              name='country'
              value={selectedCity}
              onChange={handleSelectChange}
            >
              <option value={-1}>請選擇</option>
              {cityData.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </BlockContent>
        </Block>
        {/* <ErrorMessage error={error._errors[0]} /> */}
      </BlockCol>
    </>
  );
};

export default CityBlock;
