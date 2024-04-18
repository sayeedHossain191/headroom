import { useEffect, useState } from 'react';
import Estate from './Estate';

const Estates = () => {

    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])

    return (
        <div>
            <div className='mt-24'>
                <h2 className='text-5xl font-merriweather font-semibold'>Find a perfect home you love..!</h2>
                <p className='text-xl font-lato mt-6 max-w-screen-sm'>Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.</p>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;