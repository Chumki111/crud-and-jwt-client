import PropTypes from 'prop-types';
import { Card} from 'flowbite-react';
const ServiceProvider = ({location,providerImage,providerName}) => {
    
    return (
        <div className=''>

            <div className='py-3'>
                <h1 className='text-4xl font-bold'>Services Provider <span className='text-[#FF3811]'>InFormation</span></h1>
            </div>
            <Card className="max-w-md">
    
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src={providerImage}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{providerName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{location}</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-[#FF3811] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#FF3811] focus:outline-none focus:ring-4 focus:ring-[#FF3811] dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-[#FF3811] bg-white px-4 py-2 text-center text-sm font-medium text-[#FF3811]  focus:outline-none focus:ring-4 focus:ring-[#FF3811] dark:border-gray-600 dark:bg-[#FF3811] dark:text-white dark:hover:border-[#FF3811]  dark:focus:ring-[#FF3811]"
          >
            Message
          </a>
        </div>
      </div>
    </Card>
        </div>
    );
};
ServiceProvider.propTypes={
    providerName:PropTypes.string
}
ServiceProvider.propTypes={
    location:PropTypes.string
}
ServiceProvider.propTypes={
    providerImage:PropTypes.string
}
export default ServiceProvider;