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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
            {
                estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
            }
        </div>
    );
};

export default Estates;