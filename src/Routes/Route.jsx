import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Log/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddSercices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";



const Route = createBrowserRouter([
    {
        path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        },
        {
            path:'/myServices',
            element:<MyServices></MyServices>
        },
        {
            path:'/addServices',
            element:<AddServices></AddServices>
        },
        {
            path:'/mySchedules',
            element:<MySchedules></MySchedules>
        }
    ]

    
    },

])



export default Route;