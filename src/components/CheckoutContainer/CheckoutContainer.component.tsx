import React, { useEffect, useState } from 'react';
import {
  CheckoutForm,
  CheckoutTitle,
  CheckoutSubmitButton,
} from './CheckoutContainer.styles';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  mainLogisticsAtom,
  getRecipientAtom,
  getCityAtom,
  getDistrictAtom,
  setValidateAddressAtom,
  setCartErrorModalAtom,
  getCartItemQuantityAtom,
  getStreetAtom,
  getDefaultAddressAtom,
} from '@/atoms';
import HomeDeliveryContainer from '@/components/HomeDeliveryContainer/HomeDeliveryContainer.component';
import InStorePickupContainer from '@/components/InStorePickupContainer/InStorePickupContainer.component';
import GenderBlock from '@/components/GenderBlock/GenderBlock.component';
import LogisticsBlock from '@/components/LogisticsBlock/LogisticsBlock.component';
import PaymentBlock from '@/components/PaymentBlock/PaymentBlock.component';
import ReceiptNameBlock from '@/components/ReceiptNameBlock/ReceiptNameBlock.component';
import CellphoneBlock from '@/components/CellphoneBlock/CellphoneBlock.component';
import ReceiptEmailBlock from '@/components/ReceiptEmailBlock/ReceiptEmailBlock.component';
import NoteBlock from '@/components/NoteBlock/NoteBlock.component';
import ScamReminderBlock from '@/components/ScamReminderBlock/ScamReminderBlock.component';
import CartTotalBlock from '@/components/CartTotalBlock/CartTotalBlock.component';
import CheckAuthBlock from '@/components/CheckAuthBlock/CheckAuthBlock.component';
import { recipientSchema } from '@/zodSchema';

import { useRouter } from 'next/navigation';
import { CheckoutErrorProps, formatZodError } from '@/helper/errorPropsHelper';
import { storage_AddressAtom } from '@/atoms/storageAtoms';

const CheckoutContainer = () => {
  const setFavoriteAddress = useSetAtom(storage_AddressAtom);
  const router = useRouter();
  const mainLogistics = useAtomValue(mainLogisticsAtom);
  const cartItemQuantity = useAtomValue(getCartItemQuantityAtom);
  const recipient = useAtomValue(getRecipientAtom);
  const validateCity = useAtomValue(getCityAtom);
  const validateDistrict = useAtomValue(getDistrictAtom);
  const street = useAtomValue(getStreetAtom);
  const setValidateAddress = useSetAtom(setValidateAddressAtom);
  const setCartErrorModal = useSetAtom(setCartErrorModalAtom);
  const defaultAddressStatus = useAtomValue(getDefaultAddressAtom);

  const [startParsing, setStartParsing] = useState(false);
  const [error, setError] = useState<CheckoutErrorProps | undefined>(undefined);

  // console.log('🚀 ~ CheckoutContainer ~ error:', error);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cartItemQuantity === 0) {
      setCartErrorModal({
        errorType: 'cartEmpty',
        errorMessage: '購物車沒有產品，無法結帳',
      });
      return;
    }
    setStartParsing(true);
  };

  useEffect(() => {
    if (startParsing) {
      const results = recipientSchema.safeParse(recipient);
      if (!results.success) {
        const error = results.error;
        // console.log('🚀 ~ useEffect ~ error:', error);
        setStartParsing(false);
        setError(formatZodError(error));
        return;
      }

      setError(undefined);
      const city = validateCity as string;
      const district = validateDistrict as string;

      if (defaultAddressStatus) {
        setFavoriteAddress({
          city,
          district,
          street,
        });
      }
      setValidateAddress(city, district);
      setStartParsing(false);
      router.push('/checkout');
    }
  }, [recipient, startParsing]);

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <CheckoutTitle>結帳</CheckoutTitle>
      <CheckAuthBlock />
      <ScamReminderBlock />
      <LogisticsBlock />
      <PaymentBlock />

      <CartTotalBlock freight={mainLogistics.freight} />
      <ReceiptNameBlock required error={error?.name} />
      <CellphoneBlock required error={error?.cellphone} />
      {mainLogistics.logisticsMode === 'homeDelivery' ? (
        <HomeDeliveryContainer addressError={error?.address} />
      ) : (
        <InStorePickupContainer />
      )}
      <GenderBlock />
      <ReceiptEmailBlock required error={error?.email} />
      <NoteBlock />

      <CheckoutSubmitButton type='submit' disabled={startParsing}>
        送出
      </CheckoutSubmitButton>
    </CheckoutForm>
  );
};

export default CheckoutContainer;
