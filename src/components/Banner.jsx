import { Swiper, SwiperSlide } from 'swiper/react';
//import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//import { Pagination } from 'swiper/modules';
import '../../src/style.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import slide1 from '../assets/building image/3d-electric-car-building.jpg'
import slide2 from '../assets/building image/pexels-binyamin-mellish-106399.jpg'
import slide3 from '../assets/building image/pexels-thanhhoa-tran-1488327.jpg'
import slide4 from '../assets/building image/real-estate-4955086_1920.jpg'
import slide5 from '../assets/building image/todd-kent-178j8tJrNlc-unsplash.jpg'

//import { EffectCoverflow, Pagination, Navigation } from 'swiper';


const Banner = () => {


    return (
        <div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 mt-24 gap-10 bg-slate-100 shadow-2xl border-2 border-orange-600'>
                <div className='my-auto ml-5'>
                    <h1 className='text-5xl mb-6 font-merriweather'>Trusted Real Estate Property for you</h1>
                    <p className='text-xl font-lato'>Looking for your dream house or property. Search here and select your best one from more than 1 million listing</p>
                </div>
                <div className='h-auto'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div>
                {/* <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                </SwiperSlide>

            </Swiper> */}
            </div>
        </div>
    );
};

export default Banner;