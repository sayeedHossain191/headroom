import { useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const EstateDetails = () => {

    const estates = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    const details = estates.find(estate => estate.id === idInt);
    console.log(details)

    return (
        <div>
            <Helmet>
                <title>
                    HeadRoom | Estate Details
                </title>
            </Helmet>
            <div className="hero min-h-screen my-8">
                <div className="hero-content ">
                    <div>
                        <h1 data-aos="zoom-in-right" data-aos-duration="2000" className="text-5xl font-bold font-merriweather mb-10">{details.estate_title}</h1>
                        <figure><img data-aos="zoom-in-up" data-aos-duration="3000" className="rounded-2xl" src={details.image} alt="Movie" /></figure>

                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-9">
                            <div>
                                <h2 data-aos="flip-up" data-aos-duration="2000" className="text-4xl font-bold font-merriweather">{details.price}</h2>
                                <h2 data-aos="flip-left" data-aos-duration="2100" className="text-2xl font-bold mt-6 font-merriweather mb-3">House Description</h2>
                                <p className="font-lato">{details.description}</p>
                            </div>


                            <div className="card bg-primary text-primary-content">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-merriweather">HIGHLIGHTS</h2>
                                    <div className="space-y-2 font-lato">
                                        <div data-aos="fade-left" data-aos-duration="1300" className="flex gap-24">
                                            <h6 className="font-semibold">Property Type</h6>
                                            <h6>{details.segment_name}</h6>
                                        </div>
                                        <hr />
                                        <div data-aos="fade-right" data-aos-duration="1400" className="flex gap-40">
                                            <h6 className="font-semibold">Area</h6>
                                            <h6>{details.area}</h6>
                                        </div>
                                        <hr />
                                        <div data-aos="fade-left" data-aos-duration="1500" className="flex gap-32">
                                            <h6 className="font-semibold">Location</h6>
                                            <h6>{details.location}</h6>
                                        </div>
                                        <hr />
                                        <div data-aos="fade-right" data-aos-duration="1600" className="flex gap-40">
                                            <h6 className="font-semibold">Status</h6>
                                            <h6>{details.status}</h6>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <h2 data-aos="flip-up" data-aos-duration="2200" className="text-2xl font-bold mt-6 font-merriweather mb-3">House Facilities</h2>
                        <div className="mt-8"><div className="flex flex-col w-full lg:flex-row font-lato text-black font-semibold">
                            <div data-aos="fade-up" data-aos-duration="1400" className="grid flex-grow card rounded-box place-items-center py-2 bg-slate-100">{details.facilities[0]}</div>
                            <div className="divider lg:divider-horizontal"></div>

                            <div data-aos="fade-up" data-aos-duration="1500" className="grid flex-grow card  rounded-box place-items-center bg-slate-100">{details.facilities[1]}</div>
                            <div className="divider lg:divider-horizontal"></div>

                            <div data-aos="fade-up" data-aos-duration="1600" className="grid flex-grow card  rounded-box place-items-center bg-slate-100">{details.facilities[2]}</div>
                            <div className="divider lg:divider-horizontal"></div>

                            <div data-aos="fade-up" data-aos-duration="1700" className="grid flex-grow card rounded-box place-items-center bg-slate-100">{details.facilities[3]}</div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;