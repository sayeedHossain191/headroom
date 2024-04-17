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


import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { FaBed } from "react-icons/fa";

const Banner = () => {


    return (
        <div>

            <div className='mt-24'>
                <div className='text-center'>
                    <h1 className="text-5xl font-bold font-merriweather">OUR SERVICES</h1>
                    <p className="py-6 max-w-lg mx-auto font-lato font-medium">HeadRoom® offers a wide range of real estate services from agency and broking to investment and tax advisory on property management.</p>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-10 gap-5 mt-10'>
                    <div className="card w-80 h-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <CiSearch className='text-6xl' />
                            <h2 className="card-title font-merriweather">Buy a New Home</h2>
                            <p className='font-lato'>Make a list of what’s important to you in a home.Is location the top priority? Share with us</p>

                        </div>
                    </div>
                    <div className="card w-80 h-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <GoHome className='text-6xl' />
                            <h2 className="card-title font-merriweather">Sell a House</h2>
                            <p className='font-lato'>We strive to help you make smarter financial decisions. While we adhere to strict editorial integrity. </p>

                        </div>
                    </div>
                    <div className="card w-80 h-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <FaBed className='text-6xl' />
                            <h2 className="card-title font-merriweather">Rent a House</h2>
                            <p className='font-lato'>Our team searches for available local properties and suggests options for your consideration. </p>

                        </div>
                    </div>
                </div>

                <div className="card mt-12 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold font-merriweather">Our Performance Pledge</h2>
                        <p className='font-lato'>We strive for Professionalism, Customer Satisfaction, Continuous Improvement of Service and Adding Value to our Clients.</p>

                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 mt-24 gap-10'>
                <div className='my-auto'>
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
    );
};

export default Banner;