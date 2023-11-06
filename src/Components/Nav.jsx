'use client';
import { Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import img from '../assets/branding.avif'
import { useContext } from "react";
import { AuthProvider } from "../Context/UserContext";



const Nav = () => {
  const { logOut, user } = useContext(AuthProvider)
  return (
    <Navbar fluid rounded className="shadow-lg rounded">
      
      <Navbar.Brand as={Link} href="">
        <img src={img} className="mr-3 h-20 w-full" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white font-fontPoppins">Offline Services</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      {
        user?.email ? <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/" onClick={logOut}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Logout
          </NavLink>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                'Dashboard'

              }
            >
              <Dropdown.Item><Link to='/myServices'>My Services</Link></Dropdown.Item>
              <Dropdown.Item><Link to='/AddServices'>Add Services</Link></Dropdown.Item>

              <Dropdown.Item><Link to='/mySchedules'>My Schedules</Link></Dropdown.Item>
            </Dropdown>

          </div>
        </Navbar.Collapse>

          :
          <Navbar.Collapse>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Login
            </NavLink>
          </Navbar.Collapse>
      }
    </Navbar>

  );
};

export default Nav;