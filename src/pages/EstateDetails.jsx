import { RxDimensions } from "react-icons/rx";
import { GrMapLocation } from "react-icons/gr";


const EstateDetails = () => {
    return (
        <div>
            <RxDimensions />
            <GrMapLocation />


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content ">
                    <div>
                        <h1 className="text-5xl font-bold">Luxury Villa with Ocean View</h1>
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>

                        <div className="grid lg:grid-cols-2 grid-cols-1 mt-9">
                            <div>
                                <h2 className="text-3xl font-semibold">$2,500,000</h2>
                                <h2 className="text-2xl font-semibold mt-6">House Description</h2>
                                <p>A stunning villa overlooking the azure waters of the Pacific Ocean. Spacious rooms, infinity pool, and private beach access.</p>
                            </div>


                            <div className="card w-96 bg-primary text-primary-content">
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">HIGHLIGHTS</h2>
                                    <div className="space-y-2">
                                        <div className="flex gap-24">
                                            <h6>Property Type</h6>
                                            <h6>Residential</h6>
                                        </div>
                                        <hr />
                                        <div className="flex gap-40">
                                            <h6>Area</h6>
                                            <h6>5,000 sq ft</h6>
                                        </div>
                                        <hr />
                                        <div className="flex gap-24">
                                            <h6>Location</h6>
                                            <h6>Malibu, California</h6>
                                        </div>
                                        <hr />
                                        <div className="flex gap-40">
                                            <h6>Status</h6>
                                            <h6>For Sale</h6>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;