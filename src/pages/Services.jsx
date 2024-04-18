import { CiSearch } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { FaBed } from "react-icons/fa";


const Services = () => {
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

        </div>
    );
};

export default Services;