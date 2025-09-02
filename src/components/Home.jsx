import React from 'react';
import heroImg from "../assets/hero-image.png";
import teamLogo1 from "../assets/team-logo-1.svg";
import teamLogo2 from "../assets/team-logo-2.svg";
import teamLogo3 from "../assets/team-logo-3.svg";
import teamLogo4 from "../assets/team-logo-4.svg";
import teamLogo5 from "../assets/team-logo-5.svg";
import teamLogo6 from "../assets/team-logo-6.svg";

const Home = () => {
  return (
    <div className="flex flex-col h-[650px] gap-[20px] justify-between">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
        <div className="px-5 md:px-3 flex flex-col justify-center">
          <h3 className="text-md lg:text-lg text-dark-text-500 font-semibold mb-6">🔥 Solid is one of the best options for you</h3>
          <h1 className="font-black text-3xl lg:text-4xl text-dark-text-500">
          Complete Tailwind CSS <br /><mark className="bg-highlight-500">Template</mark> for SaaS Website
          </h1>
          <p className="text-gray-300 text-sm lg:text-md my-6">
          Solid is a complete Tailwind CSS template crafted specially for SaaS, Software <br /> Mobile App and Web App Sites.
          </p>
          <div className="flex space-x-6">
            <input type="text" placeholder="Enter your email address" className="border-2 border-gray-200 py-3 px-6 shadow-lg shadow-gray-100 rounded-4xl placeholder:text-gray-400 placeholder:font-medium focus:outline-none focus:border-2 focus:border-primary-500" />
            <button className="text-white font-medium py-3 px-6 bg-dark-text-500 rounded-4xl hover:bg-black transition-all cursor-pointer">Get Started</button>
          </div>
          <p className="text-dark-text-500 text-sm lg:text-md py-6">
          Try for free no credit card required
          </p>
        </div>
        <div className="px-5 md:px-3 flex items-center justify-center">
          <img src={heroImg} width={700} height={444} className="shadow-2xl shadow-gray-300" />
        </div>
      </div>
      <div className="bg-light-200 w-full h-[90px] grid grid-cols-3 lg:grid-cols-6 place-items-end">
        <div className="flex items-center justify-center w-full p-3">
          <img src={teamLogo1} width={100} height={30} className="brightness-125" />
        </div>
        <div className="flex items-center justify-center w-full p-3">
          <img src={teamLogo2} width={100} height={30} className="brightness-125" />
        </div>
        <div className="flex items-center justify-center w-full p-3">
          <img src={teamLogo3} width={100} height={30} className="brightness-125" />
        </div>
        <div className="flex items-center justify-center w-full p-3">
          <img src={teamLogo4} width={100} height={30} className="brightness-125" />
        </div>
        <div className="flex items-center justify-center w-full p-3">
          <img src={teamLogo5} width={100} height={30} className="brightness-125" />
        </div>
        <div className="flex items-center justify-center w-full p-3">
          <img src={teamLogo6} width={100} height={30} className="brightness-125" />
        </div>
      </div>
    </div>
  )
}

export default Home;