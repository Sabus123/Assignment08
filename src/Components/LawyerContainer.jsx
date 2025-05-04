import React from 'react';
import LawyerCard from './LawyerCard';

const LawyerContainer = ({lawyer}) => {
    console.log(lawyer);
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
           {
            lawyer.map(lawyer => (
                <LawyerCard key={lawyer.id} lawyer={lawyer}></LawyerCard>
            ))
           }

           
            </div>
            <button>Show Detalise</button>
            {/* LawyerContainer section :{lawyer.length} */}
        </div>
    );
};

export default LawyerContainer;