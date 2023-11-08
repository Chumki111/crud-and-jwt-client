'use client';
import { Card} from 'flowbite-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const AllServices = ({service}) => {
    const {_id,serviceImage,serviceName,serviceDescription,providerImage,providerName,servicePrice,location} = service
    
    return (
        <div>
            <Card
      className=""
      imgAlt="serviceImage is coming soon"
      imgSrc={serviceImage}
    >
      <a href="#">
        <h5 className="text-2xl font-semibold tracking-tight  dark:text-white mb-2">
         Service Name : <span className='text-[#FF3811]'>{serviceName}</span>
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
                  height="32"
                  src={providerImage}
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{providerName}</p>
                
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">Location : {location}</div>
            </div>
          </li>
         
         
        
         
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">Service Price : ${servicePrice}</span>
       <Link to={`/service/${_id}`}>
       
       <button
          
          className="rounded-lg btn bg-[#FF3811] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF3811] focus:outline-none focus:ring-4 focus:ring-[#FF3811] dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]"
        >
          View Details
        </button>
       </Link>
      </div>
    </Card>


        </div>
    );
};
AllServices.propTypes ={
    service:PropTypes.object
}
export default AllServices;