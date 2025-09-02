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
    <div className="flex flex-col h-[calc(100vh - 295px)] gap-[20px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
        <div className="h-[550px] bg-blue-500 px-5 md:px-3">1</div>
        <div className="h-[550px] px-5 md:px-3 flex items-center justify-center">
          <img src={heroImg} width={700} height={444} className="shadow-2xl shadow-gray-300" />
        </div>
      </div>
      <div className="bg-light-200 w-full h-[90px] grid grid-cols-3 lg:grid-cols-6">
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