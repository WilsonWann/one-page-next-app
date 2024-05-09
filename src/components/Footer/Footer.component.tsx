import React from 'react';
import {
  FooterContentWrapper,
  FooterImageWrapper,
  FooterWrapper,
  FooterCopyRight,
} from './Footer.styles';

import Image from 'next/image';
import Logo from '@/components/Logo/Logo.component';
import NavLink from '@/components/NavLink/NavLink.component';

const Footer = () => {
  return (
    <FooterWrapper>
      <Logo size={72} />
      <FooterContentWrapper>
        <span> 威爾森行銷有限公司 </span>
        <span> 聯絡電話：(04)1234-5678 </span>
        <span> 營業時間：周一至周五 9:00~18:00 </span>
        <span> E-mail：service@wilson.tw </span>
        <span> Copyright © 威爾森行銷有限公司 </span>
        <span> All Rights Reserved.Design by 威爾森行銷 </span>
      </FooterContentWrapper>
      <FooterImageWrapper>
        <Image
          width='50'
          height='31'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/visa.png'
          alt=''
        />
        <Image
          width='83'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/mastercard.png'
          alt=''
        />
        <Image
          width='67'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/jcb.png'
          alt=''
        />
        <Image
          width='130'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/PAYUNi.png'
          alt=''
        />
        <Image
          width='157'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/ecpay.png'
          alt=''
        />
        <Image
          width='101'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/pchomepay.png'
          alt=''
        />
        <Image
          width='51'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/7-11.png'
          alt=''
        />
        <Image
          width='54'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/familymart.png'
          alt=''
        />
        <Image
          width='43'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/hilife.png'
          alt=''
        />
        <Image
          width='259'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/icashPay.png'
          alt=''
        />
        <Image
          width='78'
          height='50'
          src='https://static.1shop.tw/storefront/3.1.90/dist/img/brand/ApplePay.png'
          alt=''
        />
      </FooterImageWrapper>
      <FooterCopyRight>
        本系統由
        <NavLink href='https://www.google.com' externalLink>
          威爾森行銷
        </NavLink>
        維護
      </FooterCopyRight>
    </FooterWrapper>
  );
};

export default Footer;
