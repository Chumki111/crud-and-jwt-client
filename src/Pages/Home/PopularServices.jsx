import { useEffect, useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter'
import PopServices from './PopServices';
import { Link } from 'react-router-dom';

const PopularServices = () => {

    const [text] = useTypewriter({
        /* Config */
        words:[' Popular services'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
      })

      const [loadedData,setLoadedData] = useState([]);

      useEffect(() =>{
        fetch('http://localhost:5000/popularServices')
        .then(res =>res.json())
        .then(data =>{
            setLoadedData(data);
        })
      },[])
   
    return (
        <div className="my-10">
           <div className="text-center space-x-1">
           <h1 className=" text-3xl font-bold text-[#151515]">Our <span style={{ color: '#FF3811', fontWeight: 'bold' }}>{text}</span></h1>
            <p className="text-[#737373]"> Each service is provided by skilled professionals who are vetted for their expertise and reliability, <br /> ensuring top-quality results for your customers</p>
            
           </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
        {
            loadedData?.map(serviceData => <PopServices key={serviceData._id} serviceData={serviceData}></PopServices>)
        }
    </div>
           
      <div className='flex justify-center items-center mt-12'>
     <Link to='/services'>
     
     <button
          
          className="rounded-lg btn bg-[#FF3811] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF3811] focus:outline-none focus:ring-4 focus:ring-[#FF3811] dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]"
        >
          Show All Services
        </button>
     </Link>
      </div>
        </div>
    );
};

export default PopularServices;