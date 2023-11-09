

import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/UserContext";
import MyBooking from "./MyBooking";
import { Table } from "flowbite-react";
import PendingWork from "./PendingWork";
import Swal from "sweetalert2";


const MySchedules = () => {
    const {user} = useContext(AuthProvider)
    const [bookings,setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(()=>{{
       
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    }},[url])
    console.log(bookings);

    const handleCompleted= id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
             'content-type':'application/json'
            },
            body:JSON.stringify({status : 'completed'})
         })
         .then(res => res.json())
         .then(data =>{
             console.log(data)
             if(data.modifiedCount > 0){
                 Swal.fire({
                     title: 'Success!',
                     text: 'Your product updated status successfully',
                     icon: 'success',
                     confirmButtonText: 'Cool'
                   })
                   
             }
         })
    }
    return (
        <div>
           <div>
           <div>
                <h1 className="text-start text-4xl py-6 font-bold">My Bookings</h1>
            </div>
          


           <Table>
      <Table.Head>
        <Table.HeadCell>User-Email</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
        <Table.HeadCell>Service Name</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        
      </Table.Head>
      <Table.Body className="divide-y">
      {
                bookings?.map(booking => <MyBooking booking={booking} key={booking._id}></MyBooking>)
            }
       
       
      </Table.Body>
    </Table>
           </div>
           
           <div className="mt-10">
            <div>
            <h1 className="text-start text-4xl py-6 font-bold">My Pending Works</h1>
            </div>

            <Table hoverable>
      <Table.Head>
        <Table.HeadCell>User-Email</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
        <Table.HeadCell>Service Name</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      
   
      <Table.Body className="divide-y">
      {
                bookings?.map(booking => <PendingWork booking={booking} key={booking._id} handleCompleted={handleCompleted}></PendingWork>)
            }
       
       
      </Table.Body>
      </Table>
           </div>
            
        </div>
    );
};

export default MySchedules;