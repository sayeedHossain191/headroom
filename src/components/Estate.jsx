import { BsHouse } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {

    const { price, estate_title, location, area, image, status } = estate;

    return (
        <div>
            <div className="card w-96 h-[420px] bg-base-100 shadow-xl">
                <figure className="px-5 pt-5"><img className="rounded-lg" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{price} <div className="badge bg-blue-700">{status}</div>
                    </h2>

                    <p className="font-medium">{estate_title}</p>

                    <div className="flex gap-8">
                        <h3 className="flex items-center gap-2"><BsHouse className="text-lg" />{area}</h3>
                        <h3 className="flex items-center gap-2"><CiLocationArrow1 className="text-lg" />{location}</h3>
                    </div>

                    <div className="card-actions justify-center mt-5">
                        <Link to='/details'>
                            <button className="btn bg-orange-500 text-black">View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;