// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';


import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { FaBed } from "react-icons/fa";

const Banner = () => {


    return (
        <div>
            <h2>Banner Section</h2>

            <div className=''>
                <div className='text-center'>
                    <h1 className="text-5xl font-bold">OUR SERVICES</h1>
                    <p className="py-6 max-w-lg mx-auto">HeadRoom® offers a wide range of real estate services from agency and broking to investment and tax advisory on property management.</p>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-10'>
                    <div className="card w-80 h-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <CiSearch className='text-6xl' />
                            <h2 className="card-title">Buy a New Home</h2>
                            <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>

                        </div>
                    </div>
                    <div className="card w-80 h-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <GoHome className='text-6xl' />
                            <h2 className="card-title">Buy a New Home</h2>
                            <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>

                        </div>
                    </div>
                    <div className="card w-80 h-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <FaBed className='text-6xl' />
                            <h2 className="card-title">Buy a New Home</h2>
                            <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>

                        </div>
                    </div>
                </div>

                <div className="card mt-6 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Our Performance Pledge</h2>
                        <p>We strive for Professionalism, Customer Satisfaction, Continuous Improvement of Service and Adding Value to our Clients.</p>

                    </div>
                </div>
            </div>

            {/* <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper> */}
        </div>
    );
};

export default Banner;