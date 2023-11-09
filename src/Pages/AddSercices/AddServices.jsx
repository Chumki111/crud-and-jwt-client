import { TextInput, Textarea } from "flowbite-react";
import img1 from '../../assets/new.jpg'
import { useContext } from "react";
import { AuthProvider } from "../../Context/UserContext";
import Swal from "sweetalert2";


const AddServices = () => {
   const {user} = useContext(AuthProvider)

   const handleAddService = event =>{
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
        



        const addService = {
            serviceName : serviceName,
            date:date,
           
            userName: userName,
            userEmail:userEmail,
            customerMessage : message,
            Price:price,
            photo:photo,
            serviceLocation:serviceLocation
            }

            fetch('https://offline-service-sharing-server-gold.vercel.app/addServices',{
                method:'POST',
                headers:{
                    'content-type' :'application/json'
                },
                body:JSON.stringify(addService)
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
     <div className="mt-10">

        <div>
            <h1 className="text-center text-4xl font-bold">Add a New Service</h1>
        </div>
         <div className="flex gap-5 mt-10 flex-col md:flex-row mx-2 justify-center items-center">

<div className="w-1/2">
    <img src={img1} className="max-w-md" alt="" />
</div>
 <div className="w-full md:w-1/2">
     <form className="card-body" onSubmit={handleAddService}>
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
                            <TextInput type="text" name='yourName' placeholder="Your Name" className="input input-bordered py-8" defaultValue={user.displayName
} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Your Email</span>
                            </label>
                            <TextInput type="email" name='userEmail' placeholder="Your Email" className="input input-bordered py-8" defaultValue={user.email}required />
                            
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
                            
                            <button type="submit" className='block text-center capitalize bg-[#FF3811] text-white py-3 font-bold rounded-md w-full' >Add Service</button>
                        </div>
                    </form>
</div>
</div>
     </div>

    );
};

export default AddServices;