'use client'

import wilson from './../assets/wilson.jpg'
import gubami from './../assets/gubami.jpg'
import lalaport from './../assets/lalaport.jpg'
import sansanyakiniku from './../assets/sansanyakiniku.png'
import ImageBlock from './components/ImageBlock'
import LiteYoutube from './components/LiteYoutube'
import ShoppingArea from './components/ShoppingArea'
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      {/* react-lite-youtube video */}
      <LiteYoutube
        id={'L2vS_050c-M'}
        title={'What’s new in Material Design for the web (Chrome Dev Summit 2019)'}
      />

      {/* images */}
      <ImageBlock customType={'default'} image={wilson} alt={'Wilson'} />
      <ImageBlock customType={'default'} image={gubami} alt={'牛肉麵'} />
      <ImageBlock customType={'default'} image={lalaport} alt={'拉拉寶都'} />
      <ImageBlock customType={'default'} image={sansanyakiniku} alt={'三三燒肉'} />

      {/* marketing paragraph */}
      <div></div>

      <ShoppingArea />

      {/* cart items */}
      {/* check auth */}
      {/* if not logged in */}
      {/* not logged in block*/}
      {/* //! test */}
      <div style={{ position: 'relative', width: '300px', height: '300px' }}></div>
      {/* if logged in */}
      {/* logged in block*/}
      <div>
        {/* cart item1 */}
        {/* cart item2 */}
        {/* cart item3 */}
        {/* cart item4 */}
      </div>

      {/* discount reminder */}
      <div>
        {/* button: take discount */}
        {/* paragraph: discount reminder detail */}
      </div>

      {/* subtotal */}
      <div></div>

      {/* member login */}
      {/* next auth */}
      <div>
        {/* facebook login */}
        {/* line login */}
        {/* email login */}
        {/* ... login */}
      </div>

      {/* fraud and member rights reminder */}
      <div></div>

      {/* logistics form */}
      {/** 運送方式 checkbox single select
       * 宅配(台灣本島) +130
       * 7-11超商取貨 +65
       * 全家超商取貨 +70
       * 萊爾富超商取貨 +60
       * */}
      {/** 付款方式 checkbox single select
       * 超商取貨時付款(optional)
       * 信用卡
       * 虛擬帳號
       * icash pay
       * Apple pay
       */}

      {/* common block */}
      {/* 總計 input readonly take value from 運送方式*/}
      {/* 收件人 請填寫姓名 input text*/}
      {/* 手機號碼 input text*/}

      {/* 超商取貨 block */}
      {/* 取貨超商 link*/}
      {/**性別 checkbox single select
       * 無
       * 先生
       * 小姐
       */}
      {/* 電子發票寄送信箱(無開立紙本發票) 建議填寫Yahoo以外的信箱 input email */}
      {/* 備註 textarea */}

      {/* 宅配 block */}
      {/* 縣市 / 區域 */}
      {/* 街道地址 不用重複輸入縣市 */}

      {/* common block */}
      {/* 方便收貨時間 */}
      {/* 運送方式 */}

      {/* any question: fb chat button*/}
      <div></div>

      {/** fixed buttons
       * fb chat button
       * proceed to checkout button
       * go to top button
       */}
      <div></div>

      {/** footer
       * store information
       * pay info
       */}
      <div></div>
    </main>
  )
}
