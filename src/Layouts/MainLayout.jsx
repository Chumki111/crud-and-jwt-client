import { Outlet } from "react-router-dom";

import Nav from "../Components/Nav";
import Foot from "../Components/Footer";


const MainLayout = () => {
    return (
        <div className="md:container md:mx-auto">
           <Nav></Nav>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default MainLayout;