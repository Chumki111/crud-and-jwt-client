'use client';
import { Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <Navbar fluid rounded className="shadow-lg py-5 rounded">
      {/* <Navbar.Brand as={Link} href="https://flowbite-react.com"> */}
      <Navbar.Brand as={Link} href="">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white font-fontPoppins">Offline Services</span>
      </Navbar.Brand>
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
          <Navbar.Toggle />
        </div>




      </Navbar.Collapse>
    </Navbar>

  );
};

export default Nav;