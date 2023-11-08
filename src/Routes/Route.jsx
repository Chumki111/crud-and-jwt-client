import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Log/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddSercices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import Register from "../Pages/Log/Register";
import SingleService from "../Pages/Services/SingleService";
import PrivetRoute from "./PrivetRoute";




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
            element:<Services></Services>,
            loader:() => fetch('http://localhost:5000/services')

        },
       {
                path:'/service/:_id',
                element:<PrivetRoute><SingleService></SingleService></PrivetRoute>,
                loader:({ params }) => fetch(`http://localhost:5000/services/${params._id}`)
       },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/myServices',
            element:<MyServices></MyServices>
        },
        {
            path:'/addServices',
            element:<PrivetRoute><AddServices></AddServices></PrivetRoute>
        },
        {
            path:'/mySchedules',
            element:<MySchedules></MySchedules>
        }
    ]

    
    },

])



export default Route;