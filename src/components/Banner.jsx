
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


        </div>
    );
};

export default Banner;