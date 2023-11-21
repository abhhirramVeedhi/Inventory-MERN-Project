import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa6"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from 'flowbite-react';
import ProPic from "../assets/profile.png"

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>
            Our Customers 
        </h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>I recently had the pleasure of using the best inventory management website, and I must say, it has completely transformed the way I handle my business operations. This platform has proven itself to be an invaluable tool for any business owner looking to streamline their inventory processes.</p>
                <Avatar
                    alt='Avatar of JESE'
                    img={ProPic}
                    rounded
                    className='w-20 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Eren Yeager</h5>
                    <p className='text-base'>CEO, ABC Company </p>
            </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>From the moment I logged in, I was impressed by the user-friendly interface. Navigating through the website was a breeze, thanks to its intuitive design and well-organized menus. I was able to quickly set up my inventory, add products, and categorize them effortlessly.</p>
                <Avatar
                    alt='Avatar of JESE'
                    img={ProPic}
                    rounded
                    className='w-20 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Idatory Yuzi</h5>
                    <p className='text-base'>CEO, Blue Company </p>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>One of the standout features of this platform is its robust reporting capabilities. The variety of customizable reports allowed me to gain valuable insights into my inventory turnover, sales trends, and stock levels. This level of data visibility has empowered me to make informed decisions about restocking, pricing, and marketing strategies.</p>
                <Avatar
                    alt='Avatar of JESE'
                    img={ProPic}
                    rounded
                    className='w-20 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Uzumaki Naruto</h5>
                    <p className='text-base'>CEO, Leaf Company </p>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>The automation features provided by the website are nothing short of game-changing. Automatic low-stock alerts and reorder reminders have saved me countless hours that would have otherwise been spent manually tracking inventory levels. This has resulted in a significant reduction in overstocking and stockouts, ultimately leading to improved profitability.</p>
                <Avatar
                    alt='Avatar of JESE'
                    img={ProPic}
                    rounded
                    className='w-20 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Inosuke</h5>
                    <p className='text-base'>CEO, Katana Company </p>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>The integration options available with this platform are also commendable. I was able to seamlessly connect my existing accounting and e-commerce systems, allowing for real-time synchronization of data across all platforms. This has eliminated the need for double data entry and reduced the risk of errors.</p>
                <Avatar
                    alt='Avatar of JESE'
                    img={ProPic}
                    rounded
                    className='w-20 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Itachi</h5>
                    <p className='text-base'>CEO, Akatsuke Company </p>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'>Customer support from the team behind this website has been outstanding. Any questions or concerns I had were promptly addressed, and the support team was always available to provide guidance or assist with any technical issues.</p>
                <Avatar
                    alt='Avatar of JESE'
                    img={ProPic}
                    rounded
                    className='w-20 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Denji</h5>
                    <p className='text-base'>CEO, Pochtha Company </p>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'>
            <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            <div className='mt-7'>
                <p className='mb-5'> the best inventory management website has exceeded my expectations in every way. Its user-friendly interface, powerful reporting capabilities, automation features, and seamless integrations make it a must-have tool for any business owner serious about optimizing their inventory processes. I wholeheartedly recommend this platform to anyone looking to take their inventory management to the next level!.</p>
                <Avatar
                    alt='Avatar of JESE'
                    img={ProPic}
                    rounded
                    className='w-20 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Kakashi</h5>
                    <p className='text-base'>CEO, XYZ Company </p>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review
