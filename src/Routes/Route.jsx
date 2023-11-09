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
import UpdateService from "../Pages/MyServices/UpdateService";
import Details from "../Pages/Home/Details";




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
            path:'/details/:_id',
            element:<PrivetRoute><Details></Details></PrivetRoute>,
            loader: ({ params }) => fetch(`https://offline-service-sharing-server-gold.vercel.app/popularServices/${params._id}`)

        },
        {
            path:'/services',
            element:<Services></Services>,
            loader:() => fetch('https://offline-service-sharing-server-gold.vercel.app/services')

        },
       {
                path:'/service/:_id',
                element:<PrivetRoute><SingleService></SingleService></PrivetRoute>,
                loader:({ params }) => fetch(`https://offline-service-sharing-server-gold.vercel.app/services/${params._id}`)
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
            element:<PrivetRoute><MyServices></MyServices></PrivetRoute>
        },
        {
          path :'/update/:_id',
          element:<PrivetRoute><UpdateService></UpdateService></PrivetRoute>,
          loader:({params}) => fetch(`https://offline-service-sharing-server-gold.vercel.app/addServices/${params._id}`)
        },
        {
            path:'/addServices',
            element:<PrivetRoute><AddServices></AddServices></PrivetRoute>
        },
        {
            path:'/mySchedules',
            element:<MySchedules></MySchedules>,
            
        }
    ]

    
    },

])



export default Route;