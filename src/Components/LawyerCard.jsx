import React from 'react';
import { PiIdentificationCardThin } from "react-icons/pi";

const LawyerCard = ({lawyer}) => {
    const {name, speciality,licenseNumber,availability,experience} = lawyer || {}
    return (
        <div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/029/604/377/small/law-consultation-agreement-contract-lawyers-advise-on-litigation-matters-and-sign-contracts-as-lawyers-to-accept-complaints-from-clients-concept-attorney-ai-generated-photo.jpg"
      alt="Movie" className='w-50 h-50 rounded-4xl'/>
  </figure>
  <div className='flex mb-2 absolute right-0 top-0'>
  <button className="btn btn-wide rounded-4xl h-5 gap-x-2 w-auto text-green-400">Available</button>
  <button className="btn btn-wide rounded-4xl h-5 gap-x-2 w-auto text-blue-500">{experience}+ experience</button>
  </div>
  <div className="card-body">
    <h2 className="card-title text-black font-bold text-xl">{name}</h2>
    <p className='font-bold'>{speciality}</p>
    <p>License No : {licenseNumber}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-wide rounded-2xl">View Details</button>
    </div>
  </div>
</div>
    );
};

export default LawyerCard;