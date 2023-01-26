import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const Heading = () => {
  return (
    <div>
      <header className="relative w-[83vw] m-auto h-[5.438rem] flex justify-center font-OpenSand">
        <img className="absolute left-[-3rem] top-[-2rem] w-40" src={Logo} alt="logo" />
        <nav className="flex justify-between items-center leading-6 w-[93%] m-auto  mr-0">
          <h1 className="text-3xl text-[#8155BA] font-bold font-Lato">VoiceOut2me</h1>
          <div className="flex gap-12 text-[#555455]">
            <NavLink className="" 
            >Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Service</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Support</NavLink>
          </div>
          <NavLink className="  text-[#BEAFC2] py-4 px-6 mr-0 border-[1px] border-[#695E9] rounded-[20px]">Book a session</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Heading;
