import React from 'react';
import logo from "../assets/logo-solid.svg";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-[50%] translate-x-[-50%] md:max-w-7xl mx-auto py-2 px-5 md:px-3 bg-white flex items-center h-[70px] w-full justify-between">
    <div className="flex">
      <div>
        <img src={logo} width={96} height={32} />
      </div>
      <div className="hidden lg:flex lg:justify-between">
        <nav className="lg:ml-20">
          <ul className="flex space-x-12 cursor-pointer">
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
    </div>
    <div className="hidden lg:flex">
      <div className="flex items-center space-x-12 cursor-pointer">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        </div>
        <button className="border-none bg-transparent text-gray-300 font-semibold hover:text-primary-500 transition-all">Sign In</button>
        <button className="border-2 border-primary-500 bg-primary-500 py-2 px-6 rounded-4xl text-white font-semibold hover:bg-primary-600 hover:border-primary-600 transition-all">Download</button>
      </div>
    </div>
    <div className="block lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
  </header>
  )
}

export default Navbar