import { BsHouse } from "react-icons/bs";
import { CiLocationArrow1 } from "react-icons/ci";

const Estate = ({ estate }) => {

    const { price, estate_title, location, area } = estate
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-semibold">{price}</h2>
                    <p className="font-medium">{estate_title}</p>

                    <div className="flex gap-8">
                        <h3 className="flex items-center gap-2"><BsHouse className="text-lg" />{area}</h3>
                        <h3 className="flex items-center gap-2"><CiLocationArrow1 className="text-lg" />{location}</h3>
                    </div>

                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-primary">View Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;