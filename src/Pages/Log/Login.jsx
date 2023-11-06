
'use client';
import {  Label, TextInput, } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { FcGoogle} from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthProvider } from '../../Context/UserContext';


const Login = () => {
    const [showPassword,setShowPassword] = useState(false);
    const {googleSignIn,signInUser} = useContext(AuthProvider);

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

   const handleGoogle =() =>{
    googleSignIn()
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{
        console.log(error);
    })
   }
    return (
        <div className='mt-10 flex justify-center items-center'>
           
                
                    <div className= 'w-full md:w-[65%] shadow-xl px-10 md:px-4  py-10 md:py-5 rounded-md'>
                    <h1 className='text-center text-4xl font-bold mt-6'>Login</h1>
                      
                      
                      <form onSubmit={handleLogin}>
                      <div className="max-w-md mx-auto">
                            <div className="mb-2 block">
                                <Label value="Your email" />
                            </div>
                            <TextInput type="email" rightIcon={HiMail} placeholder="Write your email" name='email' required />
                        </div>
                        <div className="max-w-md mx-auto relative">
                            <div className="mb-2 block">
                                <Label value="Your Password" />
                            </div>
                            <TextInput type={showPassword ? "text" : "password"}   placeholder="Write your password" name='password' required />
                            <span  className='absolute top-[60%] -right-0 pr-3 text-xl ' onClick={() => setShowPassword(!showPassword)}>{
                    showPassword ? <FaEyeSlash ></FaEyeSlash> : <FaEye></FaEye>
                }</span>
                        </div>
                        <div className="max-w-md mx-auto">
                        <div className="mb-2 mt-3 block">
                        <button type='' className='w-full btn text-white bg-black  py-2 rounded-md'>Login</button>
                            </div>
                            
                        </div>
                        <div className="max-w-md mx-auto">
                        <div className="mb-2 mt-7 block">
                        <h1 className='text-center text-lg font-medium mt-4'>Or Sign In With</h1>
                       
                        </div>
                        <button onClick={handleGoogle} type='' className='w-full btn justify-center items-center flex py-3 text-white bg-black rounded-md'>
                            Continue With Google <FcGoogle className="text-2xl ml-3"></FcGoogle></button>
                            
                            
                        </div>
                        <p className=" text-base text-center my-5">Dont’t Have An Account ? <Link to='/register' className=""><button className=" btn-link underline">Create an Account</button></Link></p>
                        </form>
                      
                       
                    </div>
                
           
        </div>
    );
};

export default Login;