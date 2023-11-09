import { TextInput, Textarea } from "flowbite-react";
import { useTypewriter } from 'react-simple-typewriter'
import img1 from '../../assets/operating-system.avif'
import { useContext } from "react";
import { AuthProvider } from "../../Context/UserContext";
// import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateService = () => {
    const updatedData = useLoaderData();
    const {_id} = updatedData

    const [text] = useTypewriter({
        /* Config */
        words:['Update Service Here'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
      })
     const {user} = useContext(AuthProvider)
      const handleUpdateService = event =>{
        event.preventDefault();
    
            const form = event.target;
            const serviceName = form.serviceName.value;
            const date= form.date.value;
            
            const photo=form.photo.value;
            const price=form.price.value;
            const userEmail=user?.email;
            const userName=user?.displayName;
            const serviceLocation = form.location.value;
            const message = form.textarea.value;
            
        console.log(message,serviceLocation,serviceName,date,photo,price,userEmail,userName);

        const updateService = {
            serviceName : serviceName,
            date:date,
           
            userName: userName,
            userEmail:userEmail,
            customerMessage : message,
            Price:price,
            photo:photo,
            serviceLocation:serviceLocation
            }
    
        fetch(`https://offline-service-sharing-server-gold.vercel.app/addServices/${_id}`,{
            method:'PUT',
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify(updateService)
         })
         .then(res => res.json())
         .then(data =>{
             console.log(data)
             if(data.modifiedCount > 0){
                 Swal.fire({
                     title: 'Success!',
                     text: 'Your product updated successfully',
                     icon: 'success',
                     confirmButtonText: 'Cool'
                   })
                   form.reset();
             }
         })
            
    
               
      }

    return (
       <div>
          <div>
            
            <div className="flex justify-center items-center mt-10  px-6 py-10">
            <div className="relative flex w-full max-w-[52rem] md:max-w-full flex-row rounded-xl  bg-clip-border text-gray-700">
                 <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                     <img
                         src={img1}
                         alt="image"
                         className="h-[80%] w-full object-cover"
                     />
                 </div>
                 <div className="pl-12 pt-6">
                     <h6 className="mb-4 block font-sans text-xl md:text-3xl font-bold uppercase leading-relaxed tracking-normal antialiased">
                         Welcome Back
                     </h6>
                     <h1 className="text-[#FF3811] text-xl font-medium">{text}</h1>
                     <p className="mt-10 font-medium text-xl">Update from below....</p>

                </div>
             </div>
            </div>
         </div>
         <div className="max-w-5xl mx-auto shadow-md px-6 mt-16 py-6">
            <form className="card-body" onSubmit={handleUpdateService}>
                <h1 className="text-center text-3xl font-bold py-5">Update Your Service</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <TextInput type="text" name='serviceName' placeholder="Service Name" className="input input-bordered py-8" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <TextInput type="date" name='date' className="input input-bordered py-8" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <TextInput type="text" name='yourName' placeholder="Your Name" className="input input-bordered py-8" defaultValue={user?.displayName} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Your Email</span>
                        </label>
                        <TextInput type="email" name='userEmail' placeholder="Your Email" className="input input-bordered py-8" defaultValue={user?.email} required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service PhotoURL</span>
                        </label>
                        <TextInput type="text" name='photo' placeholder="Services Photo" className="input input-bordered py-8" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <TextInput type="text" name='price' placeholder="Service Price" className="input input-bordered py-8" required />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Service Area</span>
                        </label>
                        <TextInput type="text" name='location' placeholder="Service Area" className="input  w-full input-bordered py-8" required />

                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <Textarea name='textarea' className="textarea textarea-info py-10" placeholder="Short Description"></Textarea>

                </div>
                <div className="form-control mt-6">

                    <button type="submit" className='block text-center capitalize bg-[#FF3811] text-white py-3 font-bold rounded-md w-full' >Update Service</button>
                </div>
            </form>
        </div>
      
       </div>
    );
};

export default UpdateService;