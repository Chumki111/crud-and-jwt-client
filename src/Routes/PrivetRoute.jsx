import { useContext } from "react";
import { AuthProvider } from "../Context/UserContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthProvider);
    const location= useLocation()
    
        if(loading){
            return <div className="flex justify-center items-center h-[500px]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        }
        if(user) {
            return children;
        }
        return  <Navigate state={location.pathname} to='/login'></Navigate>
   
};
PrivetRoute.propTypes ={
    children : PropTypes.node,
}
export default PrivetRoute;