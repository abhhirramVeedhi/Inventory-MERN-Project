import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BannerCard.css';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

function BannerCard() {
  return (
    <div className='banner'>
      <b className='hotpicks'>Hot Picks🔥 of the DAY!</b>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=1440' alt='15'/> </SwiperSlide>
        <SwiperSlide><img src='https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/google-pixel-8-pro-062409-16x9.jpg?VersionId=uzWz4esNMwuEA6WTfpLyt5kkhDmAHR2f&size=690:388' alt='15'/></SwiperSlide>
        <SwiperSlide><img src='https://abekislevitz.com/wp/wp-content/uploads/2021/10/HERO10SettingsGuide_Thumb-1.jpg' alt='15'/></SwiperSlide>
        <SwiperSlide><img src='https://assets.mspimages.in/gear/wp-content/uploads/2023/01/Apple-MacBook-Pro-M2-Pro-M2-Max-14-inch-16-inch.jpg' alt='15'/></SwiperSlide>
        <SwiperSlide><img src='https://images.samsung.com/is/image/samsung/p6pim/in/rs7hcg8543b1hl/gallery/in-side-by-side-family-hub-449420-rs7hcg8543b1hl-535087575?$650_519_PNG$' alt='15'/></SwiperSlide>
        <SwiperSlide><img src='https://i.insider.com/6345c70939a9f1001232ab89?width=700' alt='15'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCard

