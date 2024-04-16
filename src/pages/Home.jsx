import Banner from "../components/Banner";
import Estates from "../components/Estates";
import Slider from "../components/Slider";
import { Helmet } from 'react-helmet-async';

const Home = () => {


    return (
        <div>
            <Helmet>
                <title>
                    HeadRoom | Home
                </title>
            </Helmet>
            <h2 className='font-merriweather text-3xl'>This is Home</h2>
            <Banner />
            <Slider />
            <Estates />
        </div>
    );
};

export default Home;