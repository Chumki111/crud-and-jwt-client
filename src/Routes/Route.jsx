import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Log/Login";


const Route = createBrowserRouter([
    {
        path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/services',
            element:<Services></Services>

        },
        {
            path: '/login',
            element:<Login></Login>
        }
    ]

    
    }
])



export default Route;