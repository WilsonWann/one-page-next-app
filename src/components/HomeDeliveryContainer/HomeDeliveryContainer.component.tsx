import React from 'react';
import { Block } from '@/components/FormBlock/FormBlock.component';
import CityBlock from '@/components/CityBlock/CityBlock.component';
import DistrictBlock from '@/components/DistrictBlock/DistrictBlock.component';
import TimeToReceiveBlock from '@/components/TimeToReceiveBlock/TimeToReceiveBlock.component';
import StreetBlock from '@/components/StreetBlock/StreetBlock.component';
import DefaultAddress from '@/components/DefaultAddress/DefaultAddress.component';

type Props = {
  addressError?: any;
};

const HomeDeliveryContainer = (props: Props) => {
  const { addressError } = props;
  return (
    <>
      <Block direction={'row'} gap={'1rem'}>
        <CityBlock required error={addressError?.city} />
        <DistrictBlock required error={addressError?.district} />
      </Block>
      <StreetBlock required error={addressError?.street} />
      <TimeToReceiveBlock />
      <DefaultAddress />
    </>
  );
};

export default HomeDeliveryContainer;
