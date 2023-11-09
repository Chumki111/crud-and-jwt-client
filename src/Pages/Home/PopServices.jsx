'use client';
import { Card} from 'flowbite-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PopServices = ({serviceData}) => {
   const{_id,serviceImage,serviceName,serviceDescription,providerImage,providerName,servicePrice} = serviceData;
    return (
        <div>
            <Card
      className=""
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={serviceImage}
    >
      <a href="#">
        <h5 className="text-2xl font-semibold tracking-tight text-[#FF3811] dark:text-white mb-2">
          {serviceName}
        </h5>
        <p>{serviceDescription}</p>
      </a>
      
      <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Neil image"
                  height="36"
                  src={providerImage}
                  width="36"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{providerName}</p>
                
                
              </div>
              
            </div>
          </li>
       
       
         
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${servicePrice}</span>
        <Link to={`/details/${_id}`}><button
          
          className="rounded-lg btn bg-[#FF3811] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF3811] focus:outline-none focus:ring-4 focus:ring-[#FF3811] dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]"
        >
          View Details
        </button></Link>
      </div>
    </Card>


        </div>
    );
};
PopServices.propTypes ={
    serviceData:PropTypes.object
}
export default PopServices;