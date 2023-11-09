import { Card } from 'flowbite-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyServiceCard = ({myService,myServices,setMyServices}) => {
    const { _id,serviceName,Price,
        photo,serviceLocation,customerMessage}= myService;

        const handleDelete = id => {
          console.log(id)
           Swal.fire({
             title: 'Are you sure?',
             text: "You won't be able to revert this!",
             icon: 'warning',
             showCancelButton: true,
             confirmButtonColor: '#3085d6',
             cancelButtonColor: '#d33',
             confirmButtonText: 'Yes, delete it!'
           }).then((result) => {
             if (result.isConfirmed) {
       
               fetch(`http://localhost:5000/addServices/${id}`, {
                 method: 'DELETE'
               })
                 .then(res => res.json())
                 .then(data => {
                   console.log(data)
                   if (data.deletedCount > 0) {
                     Swal.fire(
                       'Deleted!',
                       'Your order has been deleted.',
                       'success'
                     )
                     const remaining = myServices?.filter(booking => booking._id !== id)
                     setMyServices(remaining)
                   }
                 })
             }
           })
       
         }

       
    return (
        <div>
              <Card
      className=""
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={photo}
    >
      <a href="#">
        <h5 className="text-2xl font-semibold tracking-tight text-[#FF3811] dark:text-white mb-2">
          {serviceName}
        </h5>
        <p>{customerMessage}</p>
       <div className="flex items-center justify-between">
       <p className="text-xl font-bold text-gray-900 dark:text-white">{serviceLocation}</p>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${Price}</span>
       </div>
      </a>
      
     
      <div className="flex items-center justify-between">
        
       <Link to={`/update/${_id}`}> <button
          
          className="rounded-lg btn bg-[#FF3811] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF3811] focus:outline-none focus:ring-4 focus:ring-[#FF3811] dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]"
        >
          Update Service
        </button></Link>
        <button onClick={() => handleDelete(_id)}
          
          className="rounded-lg btn bg-[#FF3811] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF3811] focus:outline-none focus:ring-4 focus:ring-[#FF3811] dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]"
        >
          Delete Service
        </button>
      </div>
    </Card>
        </div>
    );
};
MyServiceCard.propTypes ={
    myService:PropTypes.object
}
MyServiceCard.propTypes = {
  myServices: PropTypes.node
}
MyServiceCard.propTypes = {
  setMyServices: PropTypes.func
}
export default MyServiceCard;