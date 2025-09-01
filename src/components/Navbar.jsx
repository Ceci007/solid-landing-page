import React from 'react';
import logo from "../assets/logo-solid.svg";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="md:max-w-7xl mx-auto py-3 px-5 md:px-3 bg-red-50 flex items-center justify-between">
    <div className="flex">
      <div>
        <img src={logo} width={96} height={32} />
      </div>
      <nav className="hidden md:ml-14 md:block">
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary-500 font-semibold" : "text-gray-300 font-semibold"
              }
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? "text-primary-500 font-semibold" : "text-gray-300 font-semibold"
              }
            >Features</NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive ? "text-primary-500 font-semibold flex items-center" : "text-gray-300 font-semibold flex items-center"
              }
            >
            {({ isActive }) => (
              <>
                <span className='mr-1'>Pages</span>
                {isActive ?  
                <div className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-primary-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                :
                <div className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                }
              </>
          )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? "text-primary-500 font-semibold" : "text-gray-300 font-semibold"
              }
            >Support</NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="block md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
  </header>
  )
}

export default Navbar