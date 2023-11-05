import { Button } from 'flowbite-react';
import error from '../../assets/404.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[50%]'>
           <div>
           <img src={error} alt="" className='w-[75%]'/>
         <div className='flex justify-center items-center'>
         <Link to='/'> <Button>
        
        Go Home
      </Button></Link>
         </div>
        </div>
           </div>
    );
};

export default ErrorPage;