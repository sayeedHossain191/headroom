import Banner from "../components/Banner";
import Estates from "../components/Estates";
import Slider from "../components/Slider";
import { Helmet } from 'react-helmet-async';
import Services from "./Services";



const Home = () => {


    return (
        <div>
            <Helmet>
                <title>
                    HeadRoom | Home
                </title>
            </Helmet>

            <Banner />
            <Services />
            <Slider />
            <Estates />
        </div>
    );
};

export default Home;