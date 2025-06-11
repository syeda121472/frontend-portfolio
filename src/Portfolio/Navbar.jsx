import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-200 px-6 py-5 w-full relative">
      <div className="flex items-center flex-wrap md:flex-nowrap gap-6">
        {/* Logo */}
        <div className="text-black text-4xl font-bold">
          <h1>
            Web<span className="text-green-700">Dev</span>
          </h1>
        </div>

        {/* Hamburger Toggle */}
        <div className="ml-auto md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="text-3xl text-black cursor-pointer z-50">
            ☰
          </label>
        </div>

        {/* Navigation Links */}
        <div className="
          hidden 
          peer-checked:flex 
          md:flex 
          flex-col md:flex-row 
          gap-4 
          w-full md:w-auto 
          bg-white md:bg-transparent 
          text-black py-4 md:py-0 
          items-start md:items-center 
          tracking-wider 
          md:ml-6
        ">
          <Link to="/" className="hover:text-green-700 transition">Home</Link>
          <Link to="/Hero2" className="hover:text-green-700 transition">Skills</Link>
          <Link to="/Hero3" className="hover:text-green-700 transition">About</Link>
          <Link to="/Webcreation" className="hover:text-green-700 transition">Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
