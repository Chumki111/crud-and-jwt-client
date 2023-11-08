'use client';

import { Button, Modal, TextInput, Textarea, } from 'flowbite-react';
import { useContext, useState } from 'react';
import { AuthProvider } from '../../Context/UserContext';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const BookServices = ({serviceName,serviceImage,servicePrice,providerEmail}) => {
    

   const {user} = useContext(AuthProvider)

    const [openModal, setOpenModal] = useState(false);
  function onCloseModal() {
    setOpenModal(false);
    
  }

  const handleBooking = event =>{
    event.preventDefault();

        const form = event.target;
        const serviceName = form.serviceName.value;
        const date= form.date.value;
        const providerEmail=form.providerEmail.value;
        const photo=form.photo.value;
        const price=form.price.value;
        const userEmail=user?.email;
        const message = form.textarea.value;
        



        const booking = {
            serviceName : serviceName,
            date:date,
            providerEmail: providerEmail,
            userEmail:userEmail,
            customerMessage : message,
            Price:price,
            photo:photo,
            }

            fetch('http://localhost:5000/bookings',{
                method:'POST',
                headers:{
                    'content-type' :'application/json'
                },
                body:JSON.stringify(booking)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
                if(data.insertedId){
                    Swal.fire(
                        'Good job!',
                        'Your booking successfully!',
                        'success'
                      )
                }
                
               
                  form.reset();
            })
  }
    return (
        <div>
             <Button onClick={() => setOpenModal(true)} className='rounded-lg btn bg-[#FF3811] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#FF3811] focus:outline-none focus:ring-4 focus:ring-[#FF3811] dark:bg-[#FF3811] dark:hover:bg-[#FF3811] dark:focus:ring-[#FF3811]'>Book Now</Button>
      <Modal show={openModal} size="" className='max-w-5xl mx-auto px-10' onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body >
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Book services in our platform</h3>
          
            <form className="card-body" onSubmit={handleBooking}>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <TextInput type="text" name='serviceName' placeholder="Service Name" className="input input-bordered py-8" defaultValue={serviceName} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <TextInput type="date" name='date' className="input input-bordered py-8" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Provider Email</span>
                                    </label>
                                    <TextInput type="email" name='providerEmail' placeholder="Provider Email" className="input input-bordered py-8" defaultValue={providerEmail} required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> User Email</span>
                                    </label>
                                    <TextInput type="email" name='userEmail' placeholder="User Email" className="input input-bordered py-8" defaultValue={user.email} required />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service PhotoURL</span>
                                    </label>
                                    <TextInput type="text" name='photo' placeholder="Services Photo" className="input input-bordered py-8" defaultValue={serviceImage} required />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Price</span>
                                    </label>
                                    <TextInput type="text" name='price' placeholder="Services Price" className="input input-bordered py-8" defaultValue={servicePrice} required />
                                    
                                </div>
                                </div>
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <Textarea name='textarea' className="textarea textarea-info py-10" placeholder="Special Instruction"></Textarea>
                                    
                                </div>
                                <div className="form-control mt-6">
                                    
                                    <button type="submit" className='block text-center capitalize bg-[#FF3811] text-white py-3 rounded-md w-full' >Book Confirm</button>
                                </div>
                            </form>
           
          </div>
           
            
            
         
        </Modal.Body>
      </Modal>
        </div>
    );
};
BookServices.propTypes ={
    serviceImage:PropTypes.string
}
BookServices.propTypes ={
    serviceName:PropTypes.string
}
BookServices.propTypes ={
    servicePrice:PropTypes.string
}
BookServices.propTypes ={
    providerEmail:PropTypes.string
}
export default BookServices;