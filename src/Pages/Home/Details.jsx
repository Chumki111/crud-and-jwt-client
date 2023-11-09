import { useLoaderData } from "react-router-dom";
import ServiceProvider from "../Services/ServiceProvider";
import BookServices from "../Services/BookServices";
import { Card } from "flowbite-react";
import { useTypewriter } from 'react-simple-typewriter'


const Details = () => {
    const loadData = useLoaderData();
    console.log(loadData);
    const { serviceImage, serviceName, serviceDescription, providerImage, providerName, servicePrice, location ,providerEmail} = loadData;

    const [text] = useTypewriter({
        /* Config */
        words:[' Click please book now button.'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
})
    return (
        <div>
             <div className="md:ml-10">
                <ServiceProvider location={location} providerImage={providerImage} providerName={providerName}></ServiceProvider>
            </div>

            <div className="mt-16 mb-10">
                <div className="flex justify-center items-center">
                   <div className="text-center space-y-3">
                   <h1 className="text-4xl font-bold  mt-10">Service Details</h1>
                    <p className="pb-10 font-medium">You can book this Service. <span className="text-[#FF3811]">{text}</span></p>
                   </div>
                </div>
            
            
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
       
       
      <BookServices serviceName={serviceName} serviceImage={serviceImage} servicePrice={servicePrice} providerEmail={providerEmail}></BookServices>
       
      </div>
    </Card>

            </div>
        </div>
    );
};

export default Details;