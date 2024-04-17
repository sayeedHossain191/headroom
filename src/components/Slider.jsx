import Marquee from 'react-fast-marquee';

import img1 from '../assets/one.png';
import img2 from '../assets/two.png';
import img3 from '../assets/three.png';
import img4 from '../assets/four.png';
import img5 from '../assets/five.png';
import img6 from '../assets/six.png';
import img7 from '../assets/seven.png';
import img8 from '../assets/eight.png';
import img9 from '../assets/nine.png';
import img10 from '../assets/ten.png';

const Slider = () => {

    return (
        <div>

            <div className='mb-14 mt-24 font-merriweather'>
                <h3 className='text-center my-14'>Trusted by 100+ Companies across the globe! </h3>
                <Marquee direction="right" speed={100} pauseOnHover={true}>
                    <div className="image_wrapper w-1/2">
                        <img src={img1} alt="" />
                    </div>
                    <div className="image_wrapper w-1/2">
                        <img src={img2} alt="" />
                    </div>
                    <div className="image_wrapper w-1/2">
                        <img src={img3} alt="" />
                    </div>
                    <div className="image_wrapper w-1/2">
                        <img src={img4} alt="" />
                    </div>
                    <div className='w-1/2'>
                        <img src={img5} alt="" />
                    </div>
                    <div className="image_wrapper w-1/2">
                        <img src={img6} alt="" />
                    </div>
                    <div className="image_wrapper w-1/2">
                        <img src={img7} alt="" />
                    </div>
                    <div className="image_wrapper w-1/2">
                        <img src={img8} alt="" />
                    </div>
                    <div className="image_wrapper w-1/2">
                        <img src={img9} alt="" />
                    </div>
                    <div className="image_wrapper w-1/2">
                        <img src={img10} alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Slider;