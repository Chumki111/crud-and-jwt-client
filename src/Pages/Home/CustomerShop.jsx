import { TextInput, Textarea } from "flowbite-react";


const CustomerShop = () => {
    return (
        <div className="mt-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Customer Support System</h1>
                <p className="py-4">You Have any Problem or any complain you can send a message</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <form className="card-body">
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                   
                                    <TextInput type="text" name='Your Name' placeholder="Your Name" className="input input-bordered py-8" required />
                                </div>
                               
                               
                                <div className="form-control">
                                   
                                    <TextInput type="email" name='userEmail' placeholder="Your Email" className="input input-bordered py-8"required />
                                    
                                </div>
                                <div className="form-control">
                                   
                                    <TextInput type="text" name='photo' placeholder="Your Phone" className="input input-bordered py-8"required />
                                    
                                </div>
                                <div className="form-control">
                                    
                                    <TextInput type="text" name='price' placeholder="Your Area" className="input input-bordered py-8"required />
                                    
                                </div>
                                </div>
                                
                                <div className="form-control">
                                   
                                    <Textarea name='textarea' className="textarea textarea-info py-10" placeholder="Your Complain"></Textarea>
                                    
                                </div>
                                <div className="form-control mt-6">
                                    
                                    <button type="submit" className='block text-center capitalize bg-[#FF3811] text-white py-3 rounded-md w-full' >Send</button>
                                </div>
                            </form>
                </div>
           
        </div>
    );
};

export default CustomerShop;