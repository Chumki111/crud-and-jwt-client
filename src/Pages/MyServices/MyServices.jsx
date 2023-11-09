import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/UserContext";
import MyServiceCard from "./MyServiceCard";


const MyServices = () => {

    const {user} = useContext(AuthProvider)
    const [myServices,setMyServices] = useState([])
    const url = `http://localhost:5000/addServices?userEmail=${user?.email}`
    useEffect(()=>{{
       
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMyServices(data)
        })
    }},[url])
    console.log(myServices);
    return (
        <div className="mt-10">
            <div>
                <h1 className="text-4xl font-bold text-center">My Services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {
                    myServices?.map(myService => <MyServiceCard key={myService._id} myService={myService} myServices={myServices} setMyServices={setMyServices}></MyServiceCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;