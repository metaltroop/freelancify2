import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/with-text.png';

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.toLowerCase() === "/login";

  if (isLoginPage) {
    return null; // Hide the Navbar on the Login page
  }

  return (
    <nav className="bg-[#ffffffd8] border-opacity-25 rounded-full flex justify-between fixed w-[90%] z-20 shadow-xl mt-2 ml-28">
      <div>
        <img src={Logo} alt="logo" className="w-20px h-20"/>
      </div>
      <div className="border-gray-900">
        <ul className="font-medium flex gap-10 p-4 mt-2  rounded-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Find Freelancers</Link></li>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/">Contact Us</Link></li>
        </ul>
      </div>
      <div className="flex justify-between items-center mr-6">
        <ul className="flex gap-3">
          <li>
            <Link to="/register" className="rounded-full bg-blue-500 text-white px-4 py-2">Register</Link>
          </li>
          <li>
            <Link to="/login" className="rounded-full bg-green-500 text-white px-4 py-2">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
